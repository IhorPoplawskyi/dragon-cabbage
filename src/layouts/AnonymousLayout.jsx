import { Header } from "@/shared/Header/Header";
import { AnonymousLayoutWrapper } from "./AnonymousLayout.styled";
import { Outlet } from "react-router-dom";
import { Footer } from "@/shared/Footer/Footer";

export const AnonymousLayout = () => {
  return (
    <AnonymousLayoutWrapper className="anonymousLayout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </AnonymousLayoutWrapper>
  );
};
