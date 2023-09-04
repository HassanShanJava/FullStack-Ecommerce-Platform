import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import {redirect} from "next/navigation"
import React from 'react'

const DashboardLayout = async({
    children,
    params
}:{
    children:React.ReactNode,
    params:{storeId:string}
}) => {
    const {userId}=auth()
    
    if(!userId){
        redirect("/sign-in")
    }

    const store=await prismadb.store.findFirst({
      where:{
        id:params.storeId,
        userId:userId   //use short hand  -> userId
      }
    })

    if(!store){
      redirect('/')
    }

  return (
    <>
    <div>This is gona be a Navebar</div>
    {children}
    </>
  )
}

export default DashboardLayout