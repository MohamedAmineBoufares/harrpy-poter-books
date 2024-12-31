"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function Error() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-5 px-4 py-8">
      <div>Something wrong happened, please try again latter</div>
      <Link href="/">
        <Button>Go back to main page</Button>
      </Link>
    </div>
  );
}

export default Error;
