import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl">Welcome Wizard [FIRST_NAME] [LAST_NAME]</h1>

      <Link href="/books">
        <Button>Log-in 🪄</Button>
      </Link>
    </main>
  );
}
