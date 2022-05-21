import BookList from "components/booklist";
import { useBooksQuery } from "generated/graphql";

const Main = () => {
  const { data, loading, error } = useBooksQuery();

  return <BookList books={data?.books} />;
};
export default Main;
