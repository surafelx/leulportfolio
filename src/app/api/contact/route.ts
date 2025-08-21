import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSubmission extends ContactFormData {
  id: string;
  submittedAt: string;
}

const contactsFilePath = path.join(process.cwd(), 'src/data/contacts.json');

async function readContacts(): Promise<ContactSubmission[]> {
  try {
    const fileContents = await fs.readFile(contactsFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
}

async function writeContacts(contacts: ContactSubmission[]): Promise<void> {
  try {
    await fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Failed to save contact submission');
  }
}

async function submitToHubSpot(formData: ContactFormData): Promise<boolean> {
  // HubSpot API integration
  // This would require a HubSpot API key and proper configuration
  // For now, we'll simulate the API call
  
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  
  if (!HUBSPOT_API_KEY || !HUBSPOT_PORTAL_ID) {
    console.log('HubSpot credentials not configured, skipping CRM integration');
    return false;
  }

  try {
    const hubspotData = {
      fields: [
        {
          name: 'firstname',
          value: formData.name.split(' ')[0]
        },
        {
          name: 'lastname',
          value: formData.name.split(' ').slice(1).join(' ') || ''
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'subject',
          value: formData.subject
        },
        {
          name: 'message',
          value: formData.message
        }
      ],
      context: {
        pageUri: 'https://leoulcreative.com/contact',
        pageName: 'Contact Form'
      }
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/contact-form`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`
        },
        body: JSON.stringify(hubspotData)
      }
    );

    return response.ok;
  } catch (error) {
    console.error('HubSpot submission error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Try to submit to HubSpot
    const hubspotSuccess = await submitToHubSpot(body);
    
    // Save to local JSON as backup/fallback
    const contacts = await readContacts();
    const newSubmission: ContactSubmission = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString()
    };
    
    contacts.push(newSubmission);
    await writeContacts(contacts);

    return NextResponse.json({
      success: true,
      message: hubspotSuccess 
        ? 'Message sent successfully! We\'ll get back to you soon.'
        : 'Message received! We\'ll get back to you soon.',
      hubspotIntegrated: hubspotSuccess
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
