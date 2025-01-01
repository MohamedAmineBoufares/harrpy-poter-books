import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Book } from "@/types";
import Link from "next/link";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  return (
    <Card className="w-ful group/card">
      <CardHeader>
        <CardTitle className="line-clamp-2">{book.attributes.title}</CardTitle>
        <CardDescription>{book.attributes.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 aspect-[3/4] duration-300 ease-in-out group-hover/card:rotate-1 group-hover/card:scale-105 group-hover/card:grayscale">
          <Image
            src={book.attributes.cover}
            alt={book.attributes.title}
            fill
            className="rounded-md object-cover"
            loading="lazy"
          />
        </div>
        <p className="line-clamp-3 text-sm">{book.attributes.summary}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground">
            Pages: {book.attributes.pages}
          </div>
          <div className="text-sm text-muted-foreground">
            Released: {new Date(book.attributes.release_date).getFullYear()}
          </div>
        </div>
        <Link prefetch href={`/books/${book.id}`}>
          <Button size="sm">View More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BookCard;
