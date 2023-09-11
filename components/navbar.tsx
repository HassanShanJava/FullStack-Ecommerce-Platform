import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MainNav from '@/components/main-nav'
import StoreSwitcher from '@/components/store-switcher'

const Navbar = () => {
  return (
    <div className='border-b '>
      <div className='flex h-16 items-center px-4'>
          <div>
           <StoreSwitcher/>
          </div>
          
          <MainNav className='mx-6' />
      
          <div className='ml-auto flex items-center space-x-4'>
            <UserButton afterSignOutUrl='/'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
