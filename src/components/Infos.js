import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import candidatContext from '../store/CandidatsContext';

function Infos() {
    let { id } = useParams();
    const candCtx = useContext(candidatContext);

    useEffect(() => {
        candCtx.getOneCandidat(id);
    }, []);

    return (

        <div className="d-flex justify-content-center">
            <div className="col-lg-8 push-lg-4">
                <div className="tab-content p-b-3">
                    <div className="tab-pane active" id="profile">

                        <div className="d-flex justify-content-center">
                            <img width="150px" height="150px" className="rounded-circle align-content-center" src={`/images/${candCtx.selectedCandidat?.avatar}`} alt=""></img>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="m-t-2"><span className="fa fa-clock-o ion-clock pull-xs-right"></span> Informations</h4>
                                <table className="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>Prénom</strong> {candCtx.selectedCandidat.prenom}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Nom</strong> {candCtx.selectedCandidat.nom}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Age</strong>{candCtx.selectedCandidat.age}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Profession</strong> {candCtx.selectedCandidat.profession}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Image</strong> {candCtx.selectedCandidat.avatar}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                    <button className="btn btn-primary" >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Infos