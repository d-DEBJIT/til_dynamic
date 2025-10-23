export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  column: string;
  date: string;
  readTime: string;
  likes: string;
  comments: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Heavy Machinery in Construction',
    excerpt:
      'Exploring how innovative technologies are transforming the construction equipment industry',
    content: `### Section 1
Here goes the full article content in Markdown.

- Point A
- Point B

### Section 2
More details...`,
    author: {
      name: 'Rajesh Kumar',
      role: 'Chief Engineer',
      bio: 'With 15 years experience in heavy machinery development and innovation',
      avatar:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80'
    },
    column: 'Industry Insights',
    date: '2024-04-05',
    readTime: '10 min',
    likes: '7K',
    comments: '426',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Sustainable Practices in Equipment Manufacturing',
    excerpt: 'How TIL is leading the way in eco-friendly heavy equipment production',
    content: `### Introduction
Full content for sustainable practices...`,
    author: {
      name: 'Priya Sharma',
      role: 'Sustainability Officer',
      bio: 'Head of Environmental Initiatives at TIL with a focus on green manufacturing',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    column: 'Green Tech',
    date: '2024-05-21',
    readTime: '15 min',
    likes: '3.9K',
    comments: '116',
    image:
      'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Safety Innovations in Heavy Equipment Operation',
    excerpt: 'New technologies making construction sites safer for operators and workers',
    content: `### Overview
Full safety innovations content...`,
    author: {
      name: 'Amit Patel',
      role: 'Safety Director',
      bio: 'Developed award-winning safety protocols for heavy machinery operations',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    column: 'Safety First',
    date: '2024-06-15',
    readTime: '8 min',
    likes: '5.2K',
    comments: '342',
    image:
      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80'
  }
];
