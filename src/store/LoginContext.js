import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const loginContext = createContext({
  seConnecter: () => {},
  seDeconnecter: () => {},
  estConnecte: false,
  verifyConnecte: () => {},
});

export function LoginContextProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  let link = "https://api-candidats.vercel.app/auth";
  let navigate = useNavigate();

  function seConnecter(credentials) {
    axios
      .post(`${link}/login`, credentials)
      .then((res) => {
        alert(res.data.message);
        setIsLogged(true);
        localStorage.setItem("access_token", res.data.token);
        navigate("/cv");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function seDeconnecter() {
    localStorage.removeItem("access_token");
    setIsLogged(false);
  }
  function verifyConnecte() {
    let token = localStorage.getItem("access_token");
    if (token) {
      setIsLogged(true);
      return true;
    } else {
      setIsLogged(false);
      return false;
    }
  }

  const c = {
    seConnecter,
    seDeconnecter,
    estConnecte: isLogged,
    verifyConnecte,
  };

  return (
    <loginContext.Provider value={c}>{props.children}</loginContext.Provider>
  );
}

export default loginContext;
