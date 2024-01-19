import { useEffect, useRef } from "react";

interface HeaderProps {
  isExpanded: boolean;
  setIsExpanded: Function;
}

export default function Header({ isExpanded, setIsExpanded }: HeaderProps) {
  const menuButton = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setIsExpanded(false);
      menuButton.current!.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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
        className={`${
          isExpanded ? "absolute" : "hidden"
        }  top-24 left-0 w-full h-full bg-neutral-600 backdrop-opacity-50`}
      >
        <ul
          className={`bg-neutral-200 list-none px-12 py-10 text-3xl grid gap-4 ml-8 w-[calc(100%-2rem)]`}
        >
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
