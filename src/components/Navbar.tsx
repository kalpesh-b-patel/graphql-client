import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return <header className="from-blue-700 h-64 to-blue-100 shadow-2xl bg-gradient-to-b">
    <div className="container mx-auto row justify-between items-center p-3 text-amber-200">
      <div className="flex">GraphQL</div>

      <div className="flex row gap-2 hidden sm:flex md:row">
        <Link to="/login">
          <a>Login</a>
        </Link>

        <Link to="/login">
          <a>Sign Up</a>
        </Link>

        <Link to="/login">
          <a>Logout</a>
        </Link>
      </div>
      <div className="sm:hidden"><span onClick={() => setExpand(!expand)}>Menu</span></div>
    </div>
    <div className={`flex col gap-2 p-3 text-amber-200 items-end sm:hidden ${expand ? '' : 'hidden'}`}>
      <Link to="/login">
        <a>Login</a>
      </Link>

      <Link to="/signup">
        <a>Sign Up</a>
      </Link>

      <Link to="/logout">
        <a>Logout</a>
      </Link>
    </div>
  </header>;
};

export default Navbar;
