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
  function ajouterCandidat(nCand, url) {
    axios
      .post(`${link}/free`, nCand)
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
      .put(`${link}/free/${uCand._id}`, uCand)
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
      .delete(`${link}/free/${id}`)
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
