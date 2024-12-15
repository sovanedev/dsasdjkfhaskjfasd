import React from 'react'

type Props = {
    children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};


