import { Chart } from '@/components/chart';
import { Chart2 } from '@/components/chart2';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <h1 className='text-4xl font-bold'>
        Hello world from <code>frontend/src/app/page.tsx</code>
      </h1>
      <Chart />
      <Chart2 />
    </div>
  );
}
