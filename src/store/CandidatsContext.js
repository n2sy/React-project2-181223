import axios from "axios";
import { createContext, useState } from "react";


const candidatContext = createContext(
    {
        tabCandidats: [],
        getAllCandidats: () => { }
    }
)

export function CandidatContextProvider(props) {
    let link = "https://api-candidats.vercel.app/cv/persons"
    const [tabCand, setTabCand] = useState([]);

    function getCandidats() {
        axios.get(link)
            .then(res => {
                console.log(res.data);
                setTabCand(res.data)
            })
    }
    const c = {
        tabCandidats: tabCand,
        getAllCandidats: getCandidats
    }
    return <candidatContext.Provider value={c}>
        {props.children}
    </candidatContext.Provider>
}
export default candidatContext;