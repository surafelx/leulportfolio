import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../Navigation'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Leoul Solomon')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navigation />)
    
    const hamburgerButton = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(hamburgerButton)
    
    // Check if mobile menu items are visible
    const mobileMenuItems = screen.getAllByText('Home')
    expect(mobileMenuItems.length).toBeGreaterThan(1) // Desktop + mobile
  })

  it('has correct navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume')
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })
})
