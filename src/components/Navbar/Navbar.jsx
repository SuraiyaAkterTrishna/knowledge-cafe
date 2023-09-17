import profile from '../../assets/images/profile.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">Knowledge Cafe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
