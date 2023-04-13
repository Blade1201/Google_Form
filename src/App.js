import React, {useRef, useState} from "react";
import "./styles/main.css";

const App = () => {

  const [clicked, setClicked] = useState(false);
  const [loginTitle, setLoginTitle] = useState("Bejelentkezés");
  const [userEmail, setUserEmail] = useState("Kérem jelentkezzen be");
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleNextClick = (e) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => passwordInputRef.current.focus(), 500);
    setLoginTitle("Üdvözlöm");
    setUserEmail(email);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    setClicked(false);
    setLoginTitle("Bejelentkezés");
    setUserEmail("Kérem jelentkezzen be");
    setTimeout(() => emailInputRef.current.focus(), 500);
  };

  const handleCheckboxClick = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
      <div className="container">
        <div className="login-box">
          <form action="#">
            <div className={`page-box ${clicked ? "active-pass" : ""}`}>
              <div className="login-title">
                <h2 className="login-text">{loginTitle}</h2>
                <p className="user-email">{userEmail}</p>
              </div>

              <div className="page email-page">
                <div className="input-box">
                  <input type="email" className="email" autoFocus required onChange={(e) => setEmail(e.target.value)}
                         ref={emailInputRef} />
                  <label> Email </label>
                </div>

                <div className="forgot">
                  <a href="#"> Elfelejtette az email címét? </a>
                </div>

                <div className="switch-form">
                  <p> Nincs még felhasználói fiókja? </p>
                  <a href="#">Regisztráljon</a>
                </div>

                <div className="btn-box next">
                  <button type="submit" className="btn-next" onClick={handleNextClick}>Következő</button>
                </div>
              </div>


              <div className="page password-page">
                <div className="input-box">
                  <input type={passwordType} className="password" ref={passwordInputRef} required />
                  <label> Jelszó </label>
                </div>

                <div className="forgot show">
                  <a href="#"> Elfelejtette a jelszavát? </a>
                  <label> <input type="checkbox" className="checkbox-pass" onClick={handleCheckboxClick}/> Jelszó megjelenítése </label>
                </div>


                <div className="btn-box">
                  <button className="btn-back" onClick={handleBackClick}>Mégse</button>
                  <button type="submit">Bejelentkezés</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

  );
}

export default App;
