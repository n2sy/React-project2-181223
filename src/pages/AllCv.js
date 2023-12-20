import React, { useContext, useEffect, useState } from 'react'
import Liste from '../components/Liste'
import Details from '../components/Details';
import candidatContext from '../store/CandidatsContext';

function AllCv() {
    const [selectedCand, setSelectedCand] = useState({});
    let candCtx = useContext(candidatContext);
    useEffect(() => {
        candCtx.getAllCandidats();

    }, [])

    console.log(selectedCand);

    return (
        <div className='row'>
            <div className='col-6'>
                <Liste onchangeSelected={setSelectedCand} allCands={candCtx.tabCandidats}></Liste>
            </div>
            <div className='col-6'>
                <Details selCand={selectedCand}></Details>
            </div>
        </div>
    )
}

export default AllCv