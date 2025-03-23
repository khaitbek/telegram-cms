import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function NewPublicationButton() {
  function handleNewPublication() {}

  return (
    <Button size="sm" onClick={handleNewPublication}>
      <PlusCircle className="mr-2 h-3 w-3" />
      New Post
    </Button>
  );
}
