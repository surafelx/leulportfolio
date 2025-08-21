import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Project, ProjectFormData } from '@/types/project';

const dataFilePath = path.join(process.cwd(), 'src/data/projects.json');

async function readProjects(): Promise<Project[]> {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

async function writeProjects(projects: Project[]): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error('Error writing projects:', error);
    throw new Error('Failed to save projects');
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const projects = await readProjects();
    
    const filteredProjects = category && category !== 'all' 
      ? projects.filter(project => project.category === category)
      : projects;
    
    // Sort by creation date (newest first)
    const sortedProjects = filteredProjects.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    return NextResponse.json({
      success: true,
      data: sortedProjects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ProjectFormData = await request.json();
    
    // Validate required fields
    if (!body.title || !body.category || !body.description || !body.imageUrl) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const projects = await readProjects();
    
    // Generate new ID
    const newId = (Math.max(...projects.map(p => parseInt(p.id)), 0) + 1).toString();
    
    const newProject: Project = {
      id: newId,
      title: body.title,
      category: body.category,
      description: body.description,
      imageUrl: body.imageUrl,
      createdAt: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    };
    
    projects.push(newProject);
    await writeProjects(projects);
    
    return NextResponse.json({
      success: true,
      data: newProject
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
