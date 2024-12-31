import { BookDetails } from "./_components/book-details";
import { unstable_cache as cache } from "next/cache";
import { getBookAndChapters } from "./actions";

const getCachedBookAndChapters = cache(
  async (id: string) => getBookAndChapters(id),
  ["chapters"],
  // Revalidate every 24 hours
  { revalidate: 3600 * 24 },
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
      {book && <BookDetails book={book} chapters={chapters} />}
    </div>
  );
}
