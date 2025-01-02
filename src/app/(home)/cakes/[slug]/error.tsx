// app/(cakes)/[slug]/error.tsx
'use client';

export default function CakeError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1 className='text-red-600'>An error occurred</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
