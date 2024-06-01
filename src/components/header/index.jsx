import "./index.scss";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            Início
            <div className="line"></div>
          </li>
          <li>
            Sobre
            <div className="line"></div>
          </li>
          <li>
            Projetos
            <div className="line"></div>
          </li>
          <li>
            Contato
            <div className="line"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
