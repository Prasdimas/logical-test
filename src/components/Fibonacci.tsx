import React, { useState } from 'react';
import { generateFibonacci } from './fibonacciUtils';

const Fibonacci: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [result, setResult] = useState<number[]>([]);

  const handleGenerate = () => {
    setResult(generateFibonacci(count));
  };

  return (
    <div>
      <h2>Deret Fibonacci</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Masukkan jumlah angka"
          style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}
        />
        <button
          onClick={handleGenerate}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            width: '150px'
          }}
        >
          Hitung Fibonacci
        </button>
      </div>
      <p>Hasil: {result.join(', ')}</p>
    </div>
  );
};

export default Fibonacci;
