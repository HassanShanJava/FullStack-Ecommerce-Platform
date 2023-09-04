import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const RootLayout = async ({children}:{children:React.ReactNode}) => {
    const {userId}=auth()

    if(!userId){
        redirect("/sign-in")
    }

    // find the first active store -> to odecide if u need to redirect

    const store=await prismadb.store.findFirst({
        where:{
            userId
        }
    })

    if(store){
        redirect(`/${store.id}`)  //this is to mamke store available to currently logged in user
    }

  return (
    <>{children}</>
  )
}

export default RootLayout