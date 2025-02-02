import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" bg-slate-900 text-white text-xl font-semibold">
      <div className="flex justify-between items-center">
        <NavLink className={"mx-2 px-2"} to="/">
          ReactQuery
        </NavLink>
        <ul className=" flex m-3 p-2 justify-between">
          <li className=" mx-2 px-2 border-b-2 border-white">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" mx-2 px-2 border-b-2 border-white">
            <NavLink to="/trad">FetchOld</NavLink>
          </li>
          <li className=" mx-2 px-2 border-b-2 border-white">
            <NavLink to="/rq">FetchRQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
