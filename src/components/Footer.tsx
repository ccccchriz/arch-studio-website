import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      className="flex flex-col gap-8 place-items-center bg-neutral-300 mt-36 pb-12 desktop:max-w-[70rem] desktop:mx-auto desktop:flex-row desktop:pb-0"
      ref={ref}
    >
      <div className="size-[7.5rem] bg-neutral-600 -mt-[3.75rem] grid place-items-center desktop:mt-0">
        <img src="/images/logo.svg" alt="" className="filter invert max-w-14" />
      </div>
      <ul className="flex flex-col gap-8 place-items-center text-lg text-neutral-500 font-bold desktop:flex-row">
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
        className="flex bg-neutral-600 text-lg px-8 py-6 text-neutral-100 font-bold justify-center items-center gap-6 desktop:ml-auto"
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
});

export default Footer;
