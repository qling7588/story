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

export const LOVE_START_DATE = '2025-01-18'; // Default start date

export const MEMORIES: Memory[] = [
  {
    id: '1',
    date: '2025-01-18',
    title: 'LẦN ĐÂU NÓI CƯỜI ZUI ZER',
    description: 'Ngày đầu tiên chúng mình chạm mặt nhau tại lớp học. Ánh mắt ấy đã làm trái tim anh xao xuyến.',
    image: 'https://i.ibb.co/v4C38j8w/1000066421.jpg',
    category: 'first-meet',
  },
  {
    id: '11',
    date: '2025-01-18',
    title: 'MƯỢN ĐIỆN THOẠI TUI NÈ',
    description: '',
    image: 'https://i.ibb.co/1fyKfVgJ/1000066417.jpg',
    category: 'first-meet',
  },  {
    id: '12',
    date: '2025-01-18',
    title: 'LẦN ĐÂU ZOO NHÀ TOI',
    description: '',
    image: 'https://i.ibb.co/qYhFKqnw/1000066413.jpg',
    category: 'first-meet',
  },  {
    id: '13',
    date: '2025-01-18',
    title: 'MÓN QUÀ ĐẦU TIÊN',
    description: '',
    image: 'https://i.ibb.co/FkhBnNRQ/1000059428.jpg',
    category: 'first-meet',
  },  {
    id: '14',
    date: '2025-01-18',
    title: 'ĐI CHƠI NÈ',
    description: '',
    image: 'https://i.ibb.co/8DYnm0h0/IMG-0546.jpg',
    category: 'first-meet',
  },  {
    id: '15',
    date: '2025-01-18',
    title: 'ĐI ĂN NÈ',
    description: '',
    image: 'https://i.ibb.co/8C5PrD7/IMG-0830.jpg',
    category: 'first-meet',
  },  {
    id: '16',
    date: '2025-01-18',
    title: 'ĐI ĐÁNH CẦU',
    description: '',
    image: 'https://i.ibb.co/gFHj2FWL/IMG-3578.jpg',
    category: 'first-meet',
  },  {
    id: '17',
    date: '2025-01-18',
    title: 'ĐƯA CÔNG CHÚA HỒI CUNG',
    description: '',
    image: 'https://i.ibb.co/d07f3pf3/IMG-6255.jpg',
    category: 'first-meet',
  },  {
    id: '18',
    date: '2025-01-18',
    title: 'ĐI CHƠI TIẾP',
    description: '',
    image: 'https://i.ibb.co/gX6N61C/IMG-9449.jpg',
    category: 'first-meet',

  },  {
    id: '19',
    date: '2025-01-18',
    title: 'VEC NÈ',
    description: '',
    image: 'https://i.ibb.co/5WqtZSQH/IMG-9492.jpg',
    category: 'first-meet',

    },  {
    id: '20',
    date: '2025-01-18',
    title: 'ĐI HỘI ',
    description: '',
    image: 'https://i.ibb.co/SDtyRf45/1000059661.jpg',
    category: 'first-meet',

    },  {
    id: '21',
    date: '2025-01-18',
    title: 'ĐI XEM PHIM RÒI DI ĂN',
    description: '',
    image: 'https://i.ibb.co/Jj7hBbKP/1000066177-2.jpg',
    category: 'first-meet',

    },  {
    id: '22',
    date: '2025-01-18',
    title: 'ĐI XIÊN BẨN',
    description: '',
    image: 'https://i.ibb.co/fVHTzPrX/1000066196.jpg',
    category: 'first-meet',

    },  {
    id: '23',
    date: '2025-01-18',
    title: 'ĐI CHƠI TIẾP',
    description: '',
    image: 'https://i.ibb.co/HDdBTK6g/1000066211.webp',
    category: 'first-meet',

    },  {
    id: '24',
    date: '2025-01-18',
    title: 'ĐI CHƠI TIẾP',
    description: '',
    image: 'https://i.ibb.co/ycdYjVTx/1000066228.jpg',
    category: 'first-meet',

    },  {
    id: '25',
    date: '2025-01-18',
    title: 'ĐI CHƠI TIẾP',
    description: '',
    image: 'https://i.ibb.co/VP14YPL/1000066338.jpg',
    category: 'first-meet',
  }, {
    id: '1',
    date: '2025-01-18',
    title: 'ĐI CHƠI TIẾP',
    description: '',
    image: 'https://i.ibb.co/FkNGFd7M/1000066403.jpg',
    category: 'first-meet',
  },
 {
    id: '26',
    date: '2025-01-18',
    title: 'KỈ YẾU NÈ',
    description: '',
    image: 'https://i.ibb.co/8ntrNwsF/VTV09273.jpg',
    category: 'first-meet',
  },  
];

export const MESSAGES: Message[] = [
  { id: '1', sender: 'partner1', text: 'Chào buổi sáng công chúa của anh! ❤️', timestamp: '08:00' },
  { id: '2', sender: 'partner2', text: 'Chào buổi sáng anh yêu! Chúc anh ngày mới tốt lành nhé. 🥰', timestamp: '08:05' },
  { id: '3', sender: 'partner1', text: 'Nhớ em quá đi mất...', timestamp: '10:30' },
];
