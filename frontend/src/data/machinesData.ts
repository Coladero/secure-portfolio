export interface Machine {
  id: string;
  title: string;
  platform: 'TryHackMe';
  difficulty: string;
  status: 'In Progress' | 'Completed';
  url?: string;
  completedAt?: string;
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