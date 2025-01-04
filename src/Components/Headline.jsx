import { useNavigate } from "react-router-dom";

function Headline() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className=" flex justify-between items-center p-4 bg-black text-white">
        <div className=" logo">
          <img
            src="\src\assets\brand_logo.png"
            alt="logo"
            className=" w-16 h-auto"
          />
        </div>
        <ul className="flex space-x-8">
          <li href="#" className=" text-grey-700 hover:text-red-500">
            Menu{" "}
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            Location
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            {" "}
            About{" "}
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            {" "}
            Contact{" "}
          </li>
        </ul>
        <div>
          <button
            className="px-3 py-1 h- m-3  bg-orange-800 text-white font-medium"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="px-4 py-1 h- m-8  bg-blue-800 text-white font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Headline;
