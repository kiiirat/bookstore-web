import {
  BookCreateInput,
  PaginatedBooksDocument,
  useCreateBookMutation,
} from "generated/graphql";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CloudinaryUpload from "utils/cloudinaryUpload";

const AddBook = () => {
  const [bookImageUrl, setBookImageUrl] = useState("");
  const [bookImage, setBookImage] = useState("");
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookCreateInput>();

  const [createBookMutation, { loading }] = useCreateBookMutation({
    onCompleted: () => {
      navigate("/", { replace: true });
    },
    refetchQueries: [PaginatedBooksDocument],
  });

  const onSubmit = handleSubmit(async (formData, event) => {
    event?.preventDefault();
    let uploadImage;
    try {
      uploadImage = await CloudinaryUpload(bookImage);
      formData.imageUrl = uploadImage;
      createBookMutation({
        variables: {
          data: {
            ...formData,
            stock: parseFloat(formData.stock as any),
            price: parseFloat(formData.price as any),
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  const onImageChange = (event: any) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setBookImage(img);
      setBookImageUrl(URL.createObjectURL(img));
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col w-full items-center mt-40">
        <div className="px-6 w-1/2  ">
          <div className="bg-white rounded-lg border border-gray-300 ">
            <div className="w-full flex justify-start">
              <p className="flex flex-row text-right items-center px-4 py-2 bg-primary  rounded-br-md rounded-tl-md text-white">
                Add New Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>

            <form
              className="text-center p-10 flex flex-row space-x-4"
              onSubmit={onSubmit}
            >
              <div className="w-full">
                <label className="flex justify-center w-full h-80 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  {bookImageUrl === "" ? (
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
                  ) : (
                    <img src={bookImageUrl} alt="book" />
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => onImageChange(e)}
                  />
                  {errors.imageUrl?.type === "required" && (
                    <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                      Image url is required
                    </p>
                  )}
                </label>
              </div>
              <div className="space-y-5 w-full">
                <div>
                  <input
                    className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary "
                    placeholder="Title"
                    {...register("title", { required: true })}
                  />
                  {errors.title?.type === "required" && (
                    <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                      Title is required
                    </p>
                  )}
                </div>
                <div>
                  <input
                    className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                    placeholder="Author"
                    {...register("author", { required: true })}
                  />
                  {errors.author?.type === "required" && (
                    <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                      Author is required
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="number"
                    className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                    placeholder="Price"
                    {...register("price", { required: true })}
                  />
                  {errors.price?.type === "required" && (
                    <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                      Price is required
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
                    placeholder="Stock"
                    {...register("stock", { required: true })}
                  />
                  {errors.stock?.type === "required" && (
                    <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                      Stock is required
                    </p>
                  )}
                </div>
                <div className="flex flex-row space-x-4">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md bg-primary text-white"
                  >
                    {!loading ? (
                      "Save"
                    ) : (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md border border-primary text-primary"
                    onClick={() => navigate(-1)}
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
export default AddBook;
