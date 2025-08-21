export interface Project {
  id: string;
  title: string;
  category: 'KV' | 'Branding' | 'TVC' | 'Motion Graphics' | '3D' | 'Decks' | 'Social Media';
  description: string;
  imageUrl: string;
  createdAt: string;
}

export type ProjectCategory = Project['category'];

export interface ProjectFormData {
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
