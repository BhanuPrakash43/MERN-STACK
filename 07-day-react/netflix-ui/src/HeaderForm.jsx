function HeaderForm() {
    const formStyles = {
      width: "50%",
      display: "flex",
      height: "56px",
      gap: "1rem",
    };
    const inputStyles = {
      fontSize: "1.2rem",
      width: "65%",
      backgroundColor: "rgba(0,0,0, 0.5)",
      color: "white",
      border: "0.5px solid #cdcdcd",
      borderRadius:"4px",
      padding: "1rem",
      outline: "none",
    };
    const buttonStyles = {
      width: "35%",
      backgroundColor: "rgb(229 , 20, 9)",
      color: "white",
      fontSize: "1.3rem",
      border: "none",
      borderRadius: "5px",
      padding: "0 .3rem"
    };
  
    return (
      <form style={formStyles}>
        <input type="email" name="email" id="emal" placeholder="Email address" style={inputStyles} />
        <button style={buttonStyles}>Get Started ﹥</button>
      </form>
    );
  }
  export default HeaderForm;