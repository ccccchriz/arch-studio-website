import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const main = useRef<HTMLElement>(null);
  const footer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      main.current!.setAttribute("inert", "");
      footer.current?.setAttribute("inert", "");
    } else {
      main.current!.removeAttribute("inert");
      footer.current?.removeAttribute("inert");
    }
  }, [isExpanded]);

  return (
    <>
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main ref={main} className="font-primary flex flex-col justify-center">
        {children}
      </main>
      <ScrollRestoration />
      <Footer ref={footer} />
    </>
  );
}
