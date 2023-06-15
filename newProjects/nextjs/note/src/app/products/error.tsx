'use client'; // Error components must be Client components

import { useEffect } from 'react';

type productError = {
  error: Error;
  reset: () => void;
}

export default function ProductError ({ error, reset }: productError ) {
  useEffect(() => {

    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Products에 뭔가 잘못됐슈!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}