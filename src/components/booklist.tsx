import { useState } from "react";
import Modal from "./modal";

export type Book = {
  __typename?: "Book" | undefined;
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  stock: number;
  createdAt: any;
  updatedAt: any;
};

type BookListProps = {
  books: Book[] | undefined;
  setTake: React.Dispatch<React.SetStateAction<number>>;
  take: number;
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const BookList: React.FC<BookListProps> = ({ books, pages, setPage, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState<Book>();
  const handleViewBook = (bookId: number) => {
    const book = books?.find((book) => book.id === bookId);
    setBook(book);
    setIsOpen(true);
  };

  const paginationList = () => {
    let arr = [];
    for (let a = 0; a < pages; a++) {
      arr.push(a + 1);
    }

    return arr;
  };

  return (
    <div className="space-y-4">
      <div className="w-full ">
        <div className="grid grid-cols-6 gap-4 ">
          {books?.map((book, index) => (
            <div
              className="flex flex-col items-center w-4/5 mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              key={index}
              onClick={() => handleViewBook(book.id)}
            >
              <img
                className="w-full rounded h-60"
                src={book.imageUrl}
                alt={book.title}
              />
              <div className="w-full ">
                <h4 className="mt-2 text-lg text-left font-medium text-gray-700  text-ellipsis overflow-hidden truncate">
                  {book.title}
                </h4>
                <p className="text-primary">₱ {book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav
        aria-label="Page navigation example"
        className="absolute bottom-4 px-6 right-4"
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              onClick={() => {
                if (page !== 1) {
                  setPage(page - 1);
                }
              }}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {paginationList().map((currentPage, index) => (
            <li key={index}>
              <button
                onClick={() => setPage(currentPage)}
                aria-current="page"
                className={`z-10 py-2 px-3 leading-tight ${
                  currentPage === page
                    ? "text-primary bg-orange-100 border border-orange-300 hover:bg-blue-100"
                    : "text-gray-500 bg-white border border-gray-300"
                } `}
              >
                {currentPage}
              </button>
            </li>
          ))}
          <li>
            <button
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              onClick={() => {
                console.log(page, pages);
                if (page !== pages) {
                  setPage(page + 1);
                }
              }}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} book={book} />
    </div>
  );
};

export default BookList;
