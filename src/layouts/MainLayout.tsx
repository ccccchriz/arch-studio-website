import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isExpanded) {
      main.current!.setAttribute("inert", "");
    } else {
      main.current!.removeAttribute("inert");
    }
  }, [isExpanded]);

  return (
    <>
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main ref={main} className="font-primary">
        {children}
      </main>
      <Footer />
    </>
  );
}
