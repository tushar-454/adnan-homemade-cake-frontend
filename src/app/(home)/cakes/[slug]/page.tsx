'use client';
import { useParams } from 'next/navigation';

const CakeDetails = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>this is cake detauls for {slug}</h1>
    </div>
  );
};

export default CakeDetails;
