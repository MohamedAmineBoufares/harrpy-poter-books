"use server";

import { BASE_PATH } from "@/consts";
import { Book, Chapter, Response } from "@/types";
import axios, { isAxiosError } from "axios";
import { notFound } from "next/navigation";

export const getBookAndChapters = async (id: string) => {
  try {
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
  } catch (error) {
    console.error(error);
    if (isAxiosError(error) && error.response?.status === 404) {
      return notFound();
    }

    throw error;
  }
};
