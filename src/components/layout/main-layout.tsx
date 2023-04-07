import { ReactNode } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
