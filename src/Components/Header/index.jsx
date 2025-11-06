import Logo from "../../assets/logo.jpg";

function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={Logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart(0)</button>
      </nav>
    </div>
  );
}

export default Header;
