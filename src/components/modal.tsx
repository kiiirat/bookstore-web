import { Dialog, Transition } from "@headlessui/react";
import {
  PaginatedBooksDocument,
  useDeleteBookMutation,
} from "generated/graphql";
import { Dispatch, Fragment, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "./booklist";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  book: Book | undefined;
};
const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, book }) => {
  const navigate = useNavigate();

  const [deleteBookMutation, { loading }] = useDeleteBookMutation({
    onCompleted: () => {
      setIsOpen(false);
    },
    refetchQueries: [PaginatedBooksDocument],
  });

  const handleDelete = () => {
    deleteBookMutation({
      variables: {
        where: {
          id: parseFloat(book?.id as any),
        },
      },
    });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-4 overflow-y-auto h-5/6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900 flex content-center justify-end"
                >
                  <div className="flex justify-end p-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center focus:outline-none"
                      data-modal-toggle="popup-modal"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </Dialog.Title>

                {/* <!-- Modal body --> */}
                <div className="pb-2 px-2">
                  <div className="flex mx-auto overflow-hidden bg-white rounded-lg ">
                    <div className="w-4/5 flex justify-start">
                      <img
                        className="w-full h-80 rounded"
                        src={book?.imageUrl}
                        alt="Book"
                      />
                    </div>

                    <div className="w-4/5 px-4 relative">
                      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {book?.title}
                      </h1>

                      <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                        by {book?.author}
                      </p>

                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        {book?.stock} in stocks
                      </p>

                      <h1 className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                        ₱ {book?.price}
                      </h1>

                      <div className="flex justify-between mt-3 item-center space-x-4 absolute bottom-0">
                        <button
                          className="w-full px-10 py-2 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-primary rounded  hover:bg-primary_shade  focus:outline-none focus:bg-primary"
                          onClick={() =>
                            navigate(`/edit/${book?.id}`, { state: book })
                          }
                        >
                          {!loading ? (
                            "Edit"
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                            </div>
                          )}
                        </button>
                        <button
                          className="w-1/2 px-8 py-2 text-xs font-bold text-primary border border-primary uppercase transition-colors duration-200 transform bg-white rounded hover:bg-grey-100 hover:text-primary_shade  focus:outline-none focus:bg-white"
                          onClick={() => handleDelete()}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
