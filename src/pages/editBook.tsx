const EditBook = () => {
  return (
    <div className="p-4 h-screen">
      <div className="flex flex-col w-full items-center mt-40">
        <div className="px-6 w-1/2  ">
          <div className="bg-white rounded-lg border border-gray-300 ">
            <div className="w-full flex justify-start">
              <p className="flex flex-row text-right items-center pl-4 pr-3 py-2 bg-primary  rounded-br-md rounded-tl-md text-white">
                Edit Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </p>
            </div>

            <form className="text-center p-10 flex flex-row space-x-4">
              <div className="w-full">
                <label className="flex justify-center w-full h-80 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-400">
                      Upload image
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>
              </div>
              <div className="space-y-5 w-full">
                <input
                  className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary "
                  placeholder="Title"
                />
                <input
                  className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                  placeholder="Author"
                />
                <input
                  className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                  placeholder="Price"
                />
                <input
                  className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                  placeholder="Stocks"
                />
                <div className="flex flex-row space-x-4">
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md bg-primary text-white"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md border border-primary text-primary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
