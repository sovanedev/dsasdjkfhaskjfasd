import React from 'react'
import { Header } from '../header'
import { Container } from '../container'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Header/>
        <Container>
            <div className='flex-2 p-4'>
                <Outlet />
            </div>
        </Container>
    </>
  )
}
