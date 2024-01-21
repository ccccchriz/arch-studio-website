import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="grid gap-8 place-items-center bg-neutral-300 mt-36 pb-12">
      <div className="size-[7.5rem] bg-neutral-600 -mt-[3.75rem] grid place-items-center">
        <img src="/images/logo.svg" alt="" className="filter invert max-w-14" />
      </div>
      <ul className="grid gap-8 place-items-center text-lg text-neutral-500 font-bold">
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link
        to={"/portfolio"}
        className="flex bg-neutral-600 text-lg px-8 py-6 text-neutral-100 font-bold justify-center items-center gap-6"
      >
        See Our Portfolio
        <img
          src="/images/icons/icon-arrow.svg"
          alt=""
          className="filter brightness-0 invert w-6 h-5"
        />
      </Link>
    </footer>
  );
}
