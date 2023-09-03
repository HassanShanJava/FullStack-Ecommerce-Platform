"use client";
import React, { useState, useEffect } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //   to prevent hydration error on server because this will be wrapped
  if (!isMounted) {
    return null;
  }


//   now all ur modals cn be here an be triggered in provider that are globally used
  return (
    <>
      <StoreModal />
    </>
  );
};
