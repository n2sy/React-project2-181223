import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const candidatContext = createContext({
  tabCandidats: [],
  selectedCandidat: {},
  getAllCandidats: () => {},
  getOneCandidat: () => {},
  updateCandidat: () => {},
  addCandidat: () => {},
  deleteCandidat: () => {},
});

export function CandidatContextProvider(props) {
  let link = "https://api-candidats.vercel.app/cv/persons";
  const [tabCand, setTabCand] = useState([]);
  const [selCand, setSelCand] = useState({});
  let navigate = useNavigate();

  function getCandidats() {
    axios.get(link).then((res) => {
      console.log(res.data);
      setTabCand(res.data);
    });
  }
  function getCandidatById(id) {
    axios.get(`${link}/${id}`).then((res) => {
      console.log(res.data);
      setSelCand(res.data);
    });
  }
  function getToken() {
    let token = localStorage.getItem("access_token");
    return {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
  }
  function ajouterCandidat(nCand, url) {
    axios
      .post(`${link}`, nCand, getToken())
      .then((res) => {
        //getCandidats();
        alert(res.data.message);
        navigate(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function editerCandidat(uCand, url) {
    axios
      .put(`${link}/${uCand._id}`, uCand, getToken())
      .then((res) => {
        //getCandidats();
        alert(res.data.message);
        navigate(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function deleteCandidat(id, url) {
    axios
      .delete(`${link}/${id}`, getToken())
      .then((res) => {
        //getCandidats();
        alert(res.data.message);
        navigate(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const c = {
    tabCandidats: tabCand,
    getAllCandidats: getCandidats,
    selectedCandidat: selCand,
    getOneCandidat: getCandidatById,
    updateCandidat: editerCandidat,
    addCandidat: ajouterCandidat,
    deleteCandidat,
  };
  return (
    <candidatContext.Provider value={c}>
      {props.children}
    </candidatContext.Provider>
  );
}
export default candidatContext;
