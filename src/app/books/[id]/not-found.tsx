import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-5 px-4 py-8">
      <div>Unfortunately, the book you are looking for does not exist.</div>
      <Link href="/books">
        <Button>See other books</Button>
      </Link>
    </div>
  );
}

export default NotFound;
