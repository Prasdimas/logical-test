import React from 'react';
import Palindrome from './components/Palindrome';
import Fibonacci from './components/Fibonacci';
import ArrayComparer from './components/ArrayComparer';

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '500px',
  backgroundColor: '#fff',
  color:'black'
};

const App: React.FC = () => {
  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>TEST LOGIC</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={cardStyle}>
          <Palindrome />
        </div>
        <div style={cardStyle}>
          <Fibonacci />
        </div>
        <div style={cardStyle}>
          <ArrayComparer />
        </div>
      </div>
    </div>
  );
};

export default App;
