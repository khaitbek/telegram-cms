"use client";

import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

export function EditChannelButton() {
  function handleManageChannel() {}

  return (
    <Button size="sm" variant="outline" onClick={handleManageChannel}>
      <Edit className="mr-2 h-3 w-3" />
      Manage
    </Button>
  );
}
