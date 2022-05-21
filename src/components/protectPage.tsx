import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./header";

type LayoutProps = {};

const ProtectedPage: React.FC<LayoutProps> = ({}) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div className="p-4 space-y-6 h-screen relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default ProtectedPage;
