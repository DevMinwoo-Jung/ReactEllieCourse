import Image from 'next/image';
import { Inter, Nanum_Gothic, Open_Sans } from '@next/font/google';
import styles from './page.module.css';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

// const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({subsets: ['latin']})


export default function Home() {
  console.log('안녕! - 서버');
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
      <Image src={'https://images.unsplash.com/photo-1441986300917-64674bd600d8'} 
      alt={'shop'}
      width={400}
      height={400}
      />
    </>
  );
}
