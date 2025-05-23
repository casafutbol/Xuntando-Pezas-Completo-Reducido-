import React from 'react';
import './Title.css';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="title">
      {children}
    </h1>
  );
};

export default Title;
