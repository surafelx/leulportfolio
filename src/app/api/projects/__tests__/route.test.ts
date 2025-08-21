import { GET, POST } from '../route'
import { NextRequest } from 'next/server'

// Mock fs module
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}))

const mockProjects = [
  {
    id: '1',
    title: 'Test Project',
    category: 'KV',
    description: 'Test description',
    imageUrl: '/test.jpg',
    createdAt: '2024-01-01',
  },
]

describe('/api/projects', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET', () => {
    it('returns all projects successfully', async () => {
      const fs = require('fs')
      fs.promises.readFile.mockResolvedValue(JSON.stringify(mockProjects))

      const request = new NextRequest('http://localhost:3000/api/projects')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual(mockProjects)
    })

    it('filters projects by category', async () => {
      const fs = require('fs')
      fs.promises.readFile.mockResolvedValue(JSON.stringify(mockProjects))

      const request = new NextRequest('http://localhost:3000/api/projects?category=KV')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual(mockProjects)
    })

    it('handles file read errors', async () => {
      const fs = require('fs')
      fs.promises.readFile.mockRejectedValue(new Error('File not found'))

      const request = new NextRequest('http://localhost:3000/api/projects')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual([])
    })
  })

  describe('POST', () => {
    it('creates a new project successfully', async () => {
      const fs = require('fs')
      fs.promises.readFile.mockResolvedValue(JSON.stringify(mockProjects))
      fs.promises.writeFile.mockResolvedValue(undefined)

      const newProject = {
        title: 'New Project',
        category: 'Branding',
        description: 'New description',
        imageUrl: '/new.jpg',
      }

      const request = new NextRequest('http://localhost:3000/api/projects', {
        method: 'POST',
        body: JSON.stringify(newProject),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(201)
      expect(data.success).toBe(true)
      expect(data.data.title).toBe(newProject.title)
      expect(data.data.id).toBeDefined()
    })

    it('validates required fields', async () => {
      const incompleteProject = {
        title: 'Incomplete Project',
        // Missing required fields
      }

      const request = new NextRequest('http://localhost:3000/api/projects', {
        method: 'POST',
        body: JSON.stringify(incompleteProject),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Missing required fields')
    })
  })
})
