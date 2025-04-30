import React, { useState, useEffect } from 'react';

const Palindrome: React.FC = () => {
  const [word, setWord] = useState('');
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');

  const checkPalindrome = () => {
    setIsPalindrome(cleaned === reversed);
  };

  useEffect(() => {
    setIsPalindrome(null);
  }, [word]);

  return (
    <div>
      <h2>Pengecek Palindrome</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Masukkan kata"
          style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}
        />
        <button
          onClick={checkPalindrome}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            width: '150px'
          }}
        >
          Cek Palindrome
        </button>
      </div>
      {isPalindrome !== null && (
        <>
          <p>
            {cleaned} {isPalindrome ? '=' : '!='} {reversed}
          </p>
          
        </>
      )}
 <p>Hasil: {isPalindrome !== null ? (isPalindrome ? 'Palindrome' : 'Bukan Palindrome') : ' '}</p>
    </div>
  );
};

export default Palindrome;
