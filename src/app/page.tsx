import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl">Welcome Wizard [FIRST_NAME] [LAST_NAME]</h1>

      <Link href="/books">
        <button className="rounded-md bg-white px-4 py-2 text-black duration-300 ease-in-out hover:bg-slate-200">
          Log-in 🪄
        </button>
      </Link>
    </main>
  );
}
