import logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="w-1/4 bg-white rounded-lg border border-gray-300 ">
        <form className="text-center p-10">
          <div className="flex justify-center">
            <img src={logo} alt="" className="w-1/2 " />
          </div>
          <div className="space-y-6 mt-10">
            <input
              className="w-full py-2 px-4  border border-gray-300 rounded-md"
              placeholder="Email Address"
            />
            <input
              className="w-full py-2 px-4  border border-gray-300 rounded-md"
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-2 px-4 rounded-md bg-primary text-white mt-10"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
