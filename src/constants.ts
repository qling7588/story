export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: 'first-meet' | 'travel' | 'special';
}

export interface Message {
  id: string;
  sender: 'partner1' | 'partner2';
  text: string;
  timestamp: string;
}

export const LOVE_START_DATE = '2023-01-01'; // Default start date

export const MEMORIES: Memory[] = [
  {
    id: '1',
    date: '2023-01-01',
    title: 'Lần đầu gặp gỡ',
    description: 'Ngày đầu tiên chúng mình chạm mặt nhau tại quán cà phê nhỏ. Ánh mắt ấy đã làm trái tim anh xao xuyến.',
    image: 'https://picsum.photos/seed/love1/800/600',
    category: 'first-meet',
  },
  {
    id: '2',
    date: '2023-05-20',
    title: 'Chuyến đi Đà Lạt',
    description: 'Cùng nhau ngắm bình minh trên đồi chè Cầu Đất. Cái lạnh của Đà Lạt làm chúng mình xích lại gần nhau hơn.',
    image: 'https://picsum.photos/seed/love2/800/600',
    category: 'travel',
  },
  {
    id: '3',
    date: '2023-12-25',
    title: 'Giáng sinh đầu tiên',
    description: 'Dưới ánh đèn lung linh, chúng mình đã cùng hứa sẽ bên nhau thật lâu.',
    image: 'https://picsum.photos/seed/love3/800/600',
    category: 'special',
  },
];

export const MESSAGES: Message[] = [
  { id: '1', sender: 'partner1', text: 'Chào buổi sáng công chúa của anh! ❤️', timestamp: '08:00' },
  { id: '2', sender: 'partner2', text: 'Chào buổi sáng anh yêu! Chúc anh ngày mới tốt lành nhé. 🥰', timestamp: '08:05' },
  { id: '3', sender: 'partner1', text: 'Nhớ em quá đi mất...', timestamp: '10:30' },
];
