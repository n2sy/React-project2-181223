import axios from "axios";
import { createContext, useState } from "react";


const candidatContext = createContext(
    {
        tabCandidats: [],
        selectedCandidat: {},
        getAllCandidats: () => { },
        getOneCandidat: () => { }
    }
)

export function CandidatContextProvider(props) {
    let link = "https://api-candidats.vercel.app/cv/persons"
    const [tabCand, setTabCand] = useState([]);
    const [selCand, setSelCand] = useState({});

    function getCandidats() {
        axios.get(link)
            .then(res => {
                console.log(res.data);
                setTabCand(res.data)
            })
    }
    function getCandidatById(id) {
        axios.get(`${link}/${id}`)
            .then(res => {
                console.log(res.data);
                setSelCand(res.data)
            })
    }
    const c = {
        tabCandidats: tabCand,
        getAllCandidats: getCandidats,
        selectedCandidat: selCand,
        getOneCandidat: getCandidatById
    }
    return <candidatContext.Provider value={c}>
        {props.children}
    </candidatContext.Provider>
}
export default candidatContext;