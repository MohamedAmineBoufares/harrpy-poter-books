import axios from "axios";
import Content from "./_components/content";
import { BASE_PATH } from "@/consts";
import { Book, Response } from "@/types";
import { Metadata } from "next";
import { unstable_cache as cache } from "next/cache";

export const metadata: Metadata = {
  title: "Harry Potter | Books",
  description: "This is a Harry Potter fan site.",
};

const getBooks = cache(
  async () => {
    const {
      data: { data: books },
    } = await axios.get<Response<Book[]>>(`${BASE_PATH}/books`);

    return books;
  },
  ["books"],
  // Revalidate every 24 hours
  { revalidate: 3600 * 24 },
);

async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Harry Potter Library 🧙🏻‍♂️</h1>
      <Content books={books} />
    </div>
  );
}

export default BooksPage;
