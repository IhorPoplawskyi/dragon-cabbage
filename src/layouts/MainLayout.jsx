import { Footer } from "@/shared/Footer/Footer";
import { MainLayoutWrapper } from "./MainLayout.styled";
import { Outlet } from "react-router-dom";
import { Header } from "@/shared/Header/Header";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper className="mainLayout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </MainLayoutWrapper>
  );
};
