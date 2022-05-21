import BookList from "components/booklist";
import {
  usePaginatedBooksLazyQuery,
  usePaginatedBooksQuery,
} from "generated/graphql";
import { useEffect, useState } from "react";

const Main = () => {
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(12);
  const [getBooks, { data }] = usePaginatedBooksLazyQuery({
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    getBooks({
      variables: {
        page,
        take,
      },
    });
  }, [page, getBooks, take]);

  return (
    <BookList
      books={data?.paginatedBooks.list}
      setTake={setTake}
      take={take}
      setPage={setPage}
      page={page}
      pages={data?.paginatedBooks.pages as number}
    />
  );
};
export default Main;
