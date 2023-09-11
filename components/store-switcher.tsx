// import { PopoverTriggerProps } from "@radix-ui/react-popover";
"use client"
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDownIcon, Store as StoreIcon} from "lucide-react";
import { cn } from "@/lib/utils";

type PopoverTriggerProps=React.ComponentPropsWithoutRef<typeof PopoverTrigger>
// for triggers
interface StoreSwitcherProps extends PopoverTriggerProps{
    items:Store[],

}


export default function StoreSwitcher({
    className,
    items=[]
}:StoreSwitcherProps){
    const storeModal=useStoreModal()
    const params=useParams()
    const router=useRouter()
    

    const formatedItems=items.map((item)=>({
        label:item.name,
        value:item.id
    }))

    const currentStore=formatedItems.find((item)=>item.value===params.storeId)

    const [open,setOpen]=useState(false)

    const onStoreSelect=(store:{value:string, label:string})=>{
        setOpen(true)
        router.push(`/${store.value}`)
    }

    return (
        <Popover  open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant={'outline'} size='sm' role='combobox' aria-expanded={open} aria-label='Select a Store' className={cn('w-[200px] justify-between',className)}>
                    <StoreIcon className="mr-2 h-4 w-4 "/>
                    Current Store
                    <ChevronsUpDownIcon className="ml-auto shrink-0 h-4 w-4 opacity-50"/>
                </Button>
            </PopoverTrigger>

        </Popover>
    );
};