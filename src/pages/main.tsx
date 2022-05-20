import BookList from "components/booklist";
import Header from "components/header";

const Main = () => {
  return (
    <div className="p-4 space-y-6 h-screen relative">
      <Header />
      <BookList />
    </div>
  );
};
export default Main;
