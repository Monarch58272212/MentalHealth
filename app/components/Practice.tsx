'use client';

import { useMemo, useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Expensive computation (kunwari mabigat gawin)
  const expensiveCalculation = (num: number) => {
    console.log('🔄 Running expensive calculation for count =', num);
    let result = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      result += num * 2;
    }
    return result;
  };

  // useMemo will only re-run the calculation if `count` changes
  const memoizedValue = useMemo(() => {
    console.log('📦 Memoized value recalculated because count changed.');
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>useMemo Demo</h1>
      <p>🧮 Result: {memoizedValue}</p>

      <button onClick={() => setCount(count + 1)}>
        ➕ Add Count (Current: {count})
      </button>

      <br />
      <br />

      <input
        value={text}
        onChange={(e) => {
          console.log('⌨️ Text changed:', e.target.value);
          setText(e.target.value);
        }}
        placeholder="Type anything"
      />
    </div>
  );
}
