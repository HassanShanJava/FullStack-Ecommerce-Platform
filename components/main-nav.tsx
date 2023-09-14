"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MainNav = ({className, ...props}:React.HTMLAttributes<HTMLElement>) => {
    const pathName=usePathname()
    const params=usePathname()
    // params contain storeId
    const routes=[
        {
           href:`${params}/settings`,
           label:"Settings",
           active: pathName=== `${params}/settings`
        }
    ]
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
        {routes.map((item,i)=>(
            <Link key={item.href} href={item.href} className={cn("text-sm font-medium transition-colors hover:text-primary", item.active?"text-black dark:text-white":"text-muted-foreground")}>
            {item.label}
            </Link>
        ))}

    </nav>
  )
}

export default MainNav