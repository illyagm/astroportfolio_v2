import { useState, useEffect } from 'react';

type ExpandingDivProps = {
  children?: React.ReactNode;
};

const AnimateDiv: React.FC<ExpandingDivProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        transition: 'width 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateDiv;
