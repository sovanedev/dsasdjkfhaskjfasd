import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactElement[] | React.ReactElement
    route: string;
}

export const HeaderA: React.FC<Props> = ({ children, route }) => {
    const navigate = useNavigate();

    return (
      <>
        <button className={`
        lg:flex 
        cursor-pointer 
        transition 
        duration-200 
        hover:text-blue-500 
        hover:underline 
        underline-offset-4
      `} onClick={() => navigate(route)}>{children}</button>
      </>
    )
  }
