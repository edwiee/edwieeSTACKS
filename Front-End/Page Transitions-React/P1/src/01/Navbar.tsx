import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-20 flex items-center text-amber-50 justify-center">
      <div className="flex gap-10 justify-center items-center">
        <Link to="/">H O M E</Link>
        {/* <Link to="/preview">Preview</Link> */}
      </div>

      {/* <h3 className="text-center font-semibold text-amber-20 text-sm">
       [Page Transition]
      </h3> */}
    </div>
  );
}
export default Navbar;
