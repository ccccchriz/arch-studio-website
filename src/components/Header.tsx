import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isExpanded: boolean;
  setIsExpanded: Function;
}

export default function Header({ isExpanded, setIsExpanded }: HeaderProps) {
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setIsExpanded(false);
      menuButton.current!.focus();
    }
  };

  const handleClick = (event: MouseEvent) => {
    if (event.target == nav.current) {
      setIsExpanded(false);
      menuButton.current!.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <header className="flex justify-between items-center p-8 font-primary font-bold text-neutral-600 tablet:text-neutral-400 tablet:gap-20 desktop:gap-28 desktop:max-w-[70rem] default:mx-auto">
      <Link to={"/"}>
        <img
          src="/images/logo.svg"
          alt="Arch logo - home"
          className="max-w-[4.8125rem]"
        />
      </Link>

      <button
        onClick={() => setIsExpanded((value: boolean) => !value)}
        type="button"
        aria-expanded={isExpanded}
        ref={menuButton}
        className="tablet:hidden"
      >
        {isExpanded ? (
          <img src="/images/icons/icon-close.svg" alt="close menu" />
        ) : (
          <img src="/images/icons/icon-hamburger.svg" alt="open menu" />
        )}
      </button>
      <nav
        ref={nav}
        className={`${
          isExpanded ? "absolute" : "hidden"
        } tablet:block tablet:static top-24 left-0 w-full h-full bg-neutral-600 bg-opacity-50 tablet:bg-opacity-0`}
      >
        <ul
          className={`flex flex-col bg-neutral-200 list-none px-12 py-10 text-3xl gap-4 ml-8 w-[calc(100%-2rem)] tablet:w-auto tablet:p-0 tablet:bg-neutral-100 tablet:flex-row tablet:text-lg tablet:gap-16`}
        >
          <li>
            <Link to={"/portfolio"} className="block">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="block">
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="block">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
