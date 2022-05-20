import logo from "assets/images/logo.png";

const Header = () => {
  return (
    <nav className="bg-white px-4">
      <div className="flex justify-between mx-auto">
        <div className="flex justify-between items-center">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white  rounded-md focus:outline-none"
              placeholder="Search a book"
            />
          </div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="" className="h-6" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-2 py-1 text-white bg-primary rounded-md hover:bg-primary_shade focus:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-1">Add Book</span>
          </button>

          <button
            type="button"
            className="flex items-center focus:outline-none"
            aria-label="toggle profile dropdown"
          >
            <div className="w-12 mr-2 h-12 overflow-hidden border-2 border-primary rounded-full flex items-center justify-center">
              <p className="text-primary">JO</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;