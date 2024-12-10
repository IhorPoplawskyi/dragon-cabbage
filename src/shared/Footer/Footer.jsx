import { FooterWrapper } from "./Footer.styled";
import { IconsBar } from "./../../components/IconsBar/IconsBar"

export const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="container">
        <div className="top-side">
          <IconsBar />
        </div>
        <div className="bot-side">
          <div className="text-item">ГОЛОВНА</div>
          <div className="text-item">ПРО НАС</div>
          <div className="text-item">ВАКАНСІЇ</div>
          <div className="text-item">ЗВ'ЯЗАТИСЯ З НАМИ</div>
        </div>
        <div className="copyright">
          <div>Copyright© 2024 Powered by A&I team</div>
        </div>
      </footer>
    </FooterWrapper>
  );
};
