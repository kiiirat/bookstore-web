import logo from "assets/images/logo.png";
import { useSigninMutation } from "generated/graphql";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location: any = useLocation();

  const from = location?.state?.from.pathname || "/";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const [signinMutation, { loading }] = useSigninMutation({
    fetchPolicy: "network-only",
    onCompleted: ({ signin }) => {
      localStorage.setItem("token", signin?.token as string);
      navigate(from, { replace: true });
    },
    onError: ({ graphQLErrors }) => {
      graphQLErrors?.map((err) => {
        return setError(err.extensions.argumentName as any, {
          type: "manual",
          message: err.message,
        });
      });
    },
  });

  const onSubmit = handleSubmit((formData, event) => {
    event?.preventDefault();
    console.log(formData);
    signinMutation({
      variables: {
        data: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  });

  if (token) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="w-1/4 bg-white rounded-lg border border-gray-300 ">
        <form className="text-center p-10" onSubmit={onSubmit}>
          <div className="flex justify-center">
            <img src={logo} alt="" className="w-1/2 " />
          </div>
          <div className="space-y-6 mt-10">
            <div>
              <input
                className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary "
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email?.type === "manual" && (
                <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                className="outline-0 pr-3 border  bg-white h-12 px-3 rounded-md text-sm focus:outline-none w-full border-gray-300 text-gray-500 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary "
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              {errors.password?.type === "manual" && (
                <p className="text-rose-600 text-xs text-left ml-1 mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-primary text-white mt-10"
          >
            {!loading ? (
              "Login"
            ) : (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
