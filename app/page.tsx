import { About } from '@/app/components/About/About';
import { Quality } from '@/app/components/Quality/Quality';
import { ImpressiveScale } from '@/app/components/ImpressiveScale/ImpressiveScale';

export default function Home() {
  return (
    <main>
      <About />
      <Quality />
      <ImpressiveScale />
    </main>
  );
}
