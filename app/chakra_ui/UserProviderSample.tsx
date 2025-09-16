// contexts/NameContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';

const NameContext = createContext({
  name: 'Juan Dela Cruz',
  setName: (name: string) => {},
});

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('Juan Dela Cruz');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => useContext(NameContext);
