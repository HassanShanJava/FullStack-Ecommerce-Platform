import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { useAuth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = async ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preference" />
        <Button variant={"destructive"} size="icon" onClick={() => ({})}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator/>
    </>
  );
};

export default SettingsForm;
