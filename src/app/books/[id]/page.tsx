import { BASE_PATH } from "@/consts";
import { Book, Chapter, Response } from "@/types";
import axios from "axios";
import { BookDetails } from "./_components/book-details";

import { unstable_cache as cache } from "next/cache";

const getCachedBookAndChapters = cache(
  async (id) => {
    const bookPromise = axios.get<Response<Book>>(`${BASE_PATH}/books/${id}`);
    const chaptersPromise = axios.get<Response<Chapter[]>>(
      `${BASE_PATH}/books/${id}/chapters`,
    );

    const [
      {
        data: { data: book },
      },
      {
        data: { data: chapters },
      },
    ] = await Promise.all([bookPromise, chaptersPromise]);

    return { book, chapters };
  },
  ["chapters"],
  // Revalidate every hour
  { revalidate: 3600 },
);

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const { book, chapters } = await getCachedBookAndChapters(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <BookDetails book={book} chapters={chapters} />
    </div>
  );
}
