import { useEffect, useRef } from "react";

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
    <header className="flex justify-between p-8 font-primary font-bold text-neutral-600">
      <a href="">
        <img
          src="/images/logo.svg"
          alt="Arch logo - home"
          className="max-w-[4.8125rem]"
        />
      </a>
      <button
        onClick={() => setIsExpanded((value: boolean) => !value)}
        type="button"
        aria-expanded={isExpanded}
        ref={menuButton}
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
        }  top-24 left-0 w-full h-full bg-neutral-600 bg-opacity-50`}
      >
        <ul
          className={`bg-neutral-200 list-none px-12 py-10 text-3xl grid gap-4 ml-8 w-[calc(100%-2rem)]`}
        >
          <li>
            <a href="" className="block">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="block">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
