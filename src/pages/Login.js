import React, { useContext, useRef } from "react";
import loginContext from "../store/LoginContext";

function Login() {
  let logCtx = useContext(loginContext);
  const mailRef = useRef();
  const pwdRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    logCtx.seConnecter({
      email: mailRef.current.value,
      password: pwdRef.current.value,
    });
  }
  return (
    <div className="col-8 offset-2">
      <form onSubmit={submitHandler}>
        <label>Adresse Mail</label>
        <input className="form-control" ref={mailRef}></input>

        <label>Mot de passe</label>
        <input className="form-control" ref={pwdRef}></input>

        <br></br>
        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
