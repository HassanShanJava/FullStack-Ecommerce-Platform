"use client";

import { UserButton } from "@clerk/nextjs";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  // const storeModal=useStoreModal()
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen])   //special case where we need the modal to be open no mmater what, user should not cloase until filled

  return null; //only need it for modal setup
};

export default SetupPage; //layout and pages need to hv export default
