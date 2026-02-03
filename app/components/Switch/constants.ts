import { StaticImageData } from 'next/image';
import quality1 from '@/public/quality/quality-1.png';
import quality2 from '@/public/quality/quality-2.png';
import quality3 from '@/public/quality/quality-3.png';
import quality4 from '@/public/quality/quality-4.png';
import quality5 from '@/public/quality/quality-5.png';
import quality6 from '@/public/quality/quality-6.png';
interface QualityList {
  id: number;
  src: StaticImageData;
  alt: string;
  href: string;
}

export const QALITY__LIST: QualityList[] = [
  { id: 1, src: quality1, alt: 'Cereal crops', href: '#' },
  { id: 1, src: quality2, alt: 'Oil seeds', href: '#' },
  { id: 1, src: quality3, alt: 'Dairy products', href: '#' },
  { id: 1, src: quality4, alt: 'Bakery products', href: '#' },
  { id: 1, src: quality5, alt: 'Poultry farming', href: '#' },
  { id: 1, src: quality6, alt: 'Vegetables and fruits', href: '#' },
];
