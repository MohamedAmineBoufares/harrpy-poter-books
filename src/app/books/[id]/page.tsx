import { BookDetails } from "./_components/book-details";
import { unstable_cache as cache } from "next/cache";
import { getBookAndChapters } from "./actions";
import axios from "axios";
import { Book, Response } from "@/types";
import { BASE_PATH } from "@/consts";

const getCachedBookAndChapters = cache(
  async (id: string) => getBookAndChapters(id),
  ["chapters"],
  // Revalidate every 24 hours
  { revalidate: 3600 * 24 },
);

export async function generateStaticParams() {
  const {
    data: { data: books },
  } = await axios.get<Response<Book[]>>(`${BASE_PATH}/books`);

  return books.map((book) => ({
    id: book.id,
  }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const { book, chapters } = await getCachedBookAndChapters(id);

  return (
    <div className="container mx-auto px-4 py-8">
      {book && <BookDetails book={book} chapters={chapters} />}
    </div>
  );
}
