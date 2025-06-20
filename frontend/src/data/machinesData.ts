export interface Machine {
  id: string;
  title: string;
  platform: 'TryHackMe';
  difficulty: string;
  status: 'In Progress' | 'Completed';
  url?: string;
  completedAt?: string;
  description?: string; //mini description of the machine
}

export const machines: Machine[] = [
  {
    id: '1',
    title: 'Lo-Fi',
    platform: 'TryHackMe',
    difficulty: 'Easy',
    status: 'Completed',
    url: 'https://tryhackme.com/room/lofi',
    completedAt: '2025-06-20',
    description: 'A beginner-friendly room focusing on basic cybersecurity concepts.',
  },
  {
    id: '2',
    title: 'Blue',
    platform: 'TryHackMe',
    difficulty: 'Medium',
    status: 'In Progress',
    url: 'https://tryhackme.com/room/blue',
  },
  // Add more machines here
];