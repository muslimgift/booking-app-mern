import { Link } from "react-router-dom";
import titles from "../title/titles";
const Header=()=>{
    return (
        <div className="bg-blue-800 py-6">
<div className="container mx-auto flex justify-between">
    <span className="text-3xl text-white font-bold tracking-tight">
        <Link to="/">
        {titles.homePageTitle}
        </Link>
    </span>
    <span className="flex space-x-2">
          
           <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500"
            >
              {titles.sign_in}
            </Link>
          
        </span>
</div>
        </div>
    );
};
export default Header;
