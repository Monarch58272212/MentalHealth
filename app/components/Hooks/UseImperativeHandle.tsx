import React, { useRef } from 'react';
import InputField, { InputFieldHandle } from '../InputField';

export default function Home() {
  const usernameRef = useRef<InputFieldHandle>(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login Form</h1>
      <InputField ref={usernameRef} label="Username" />
      <input type="text" placeholder="qwertyu" />
      <button onClick={() => usernameRef.current?.focus()}>
        Focus Username
      </button>
      <button onClick={() => usernameRef.current?.reset()}>
        Reset Usernamefsffgit
      </button>
    </div>
  );
}
