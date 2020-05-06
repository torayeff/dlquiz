import Link from "next/link";

const Header = () => (
  <div>
    <div className="header-blue">
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">DLQuiz</a>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"/></button>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;