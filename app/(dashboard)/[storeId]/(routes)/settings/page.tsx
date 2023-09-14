import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

interface SettingPageProps{
params:{
    storeId:string
}
}

const SettingPage:React.FC<SettingPageProps> = async({params}) => {
    const {userId}=auth()


    if(!userId){
        redirect('/sign-in')
    }

    const store =await prismadb.store.findFirst({
        where:{
            id:params.storeId
        }
    })

    // if no store
    // protection for manually typing store_id in url that doesnt exist
    if(!store){
        redirect('/')
    }


  return (
    <div className='flex-col '>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
            Hello Setting
        </div>

    </div>
  )
}

export default SettingPage