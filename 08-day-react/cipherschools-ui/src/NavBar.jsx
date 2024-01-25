function NavBar() {

  const stylesNav = {
    maxWidth: "1280px",
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    border: "2px solid red",
    
  };

  const stylesH1 = {
    fontFamily: "CipherSchools_font!important"
  };

  const stylesList = {
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }

  return (
    <nav style={stylesNav}>
      <span style={{display: "flex"}}>
      <img
        src="./src/assets/Cipherschools_logo.png"
        alt="cipherschools_logo"
        style={{ width: "35px" }}
      />
      <h1 style={stylesH1}>CipherSchools</h1>
      </span>

      {/* <ul style={stylesList}> */}
        <li>Home</li>
        <li>Creator Access</li>
        <li>Live Reviews</li>
        <li>Community</li>
      {/* </ul> */}

      <button>Explore Courses</button>
    </nav>
  );
}
export default NavBar;
