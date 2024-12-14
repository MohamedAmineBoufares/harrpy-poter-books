"use client";

import React, { useState } from "react";
import { SearchBar } from "./search-bar";
import type { Book } from "@/types";
import { Badge } from "@/components/ui/badge";
import BookCard from "./book-card";

function Content({ books }: { books: Book[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.attributes.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="mb-6 flex items-center justify-between">
        <SearchBar onSearch={setSearchQuery} />
        <Badge variant="outline">
          {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
        </Badge>
      </div>
      {filteredBooks.length === 0 ? (
        <div className="mt-56 flex items-center justify-center">
          <h1 className="text-xl">No books found...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Content;
