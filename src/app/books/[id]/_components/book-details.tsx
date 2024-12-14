"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Chapter } from "@/types";

export function BookDetails({
  book,
  chapters,
}: {
  book: Book;
  chapters: Chapter[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="relative mb-4 aspect-[3/4]">
          <Image
            src={book.attributes.cover}
            alt={book.attributes.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <h1 className="mb-2 text-3xl font-bold">{book.attributes.title}</h1>
        <h2 className="text-muted-foreground mb-2 text-xl">
          {book.attributes.author}
        </h2>
        <div className="text-muted-foreground mb-6 flex flex-col">
          <small>Pages: {book.attributes.pages}</small>
          <small>
            Released: {new Date(book.attributes.release_date).getFullYear()}
          </small>
        </div>
        <p className="mb-4">{book.attributes.summary}</p>

        <h3 className="mb-4 text-2xl font-semibold">Chapters</h3>
        <Accordion type="single" collapsible className="w-full">
          {chapters.map((chapter) => (
            <AccordionItem key={chapter.id} value={chapter.id}>
              <AccordionTrigger>
                Chapter {chapter.attributes.order}: {chapter.attributes.title}
              </AccordionTrigger>
              <AccordionContent>{chapter.attributes.summary}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
