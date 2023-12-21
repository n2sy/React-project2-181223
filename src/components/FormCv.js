import React, { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import candidatContext from "../store/CandidatsContext";

function FormCv() {
  let { id } = useParams();
  let prenomRef = useRef();
  let ageRef = useRef();
  let nomRef = useRef();
  let professionRef = useRef();
  let candCtx = useContext(candidatContext);
  const navigate = useNavigate();
  function updateHandler(e) {
    e.preventDefault();
    candCtx.updateCandidat(
      {
        _id: id,
        prenom: prenomRef.current.value,
        nom: nomRef.current.value,
        age: ageRef.current.value,
        profession: professionRef.current.value,
      },
      "/cv"
    );
    //navigate("/cv");
  }
  if (id) {
    //candCtx.getOneCandidat(id);
    return (
      <div className="col-6">
        <form onSubmit={updateHandler}>
          <label>Prenom</label>
          <input
            defaultValue={candCtx.selectedCandidat.prenom}
            className="form-control"
            ref={prenomRef}
          ></input>
          <label>Nom</label>
          <input
            defaultValue={candCtx.selectedCandidat.nom}
            className="form-control"
            ref={nomRef}
          ></input>
          <label>Age</label>
          <input
            defaultValue={candCtx.selectedCandidat.age}
            className="form-control"
            type="number"
            ref={ageRef}
          ></input>
          <label>Profession</label>
          <input
            defaultValue={candCtx.selectedCandidat.profession}
            className="form-control"
            ref={professionRef}
          ></input>
          <center>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </center>
        </form>
      </div>
    );
  } else {
    return (
      <form>
        <label>Prenom</label>
        <input className="form-control"></input>
        <label>Nom</label>
        <input className="form-control"></input>
        <label>Age</label>
        <input className="form-control" type="number"></input>
        <label>Profession</label>
        <input className="form-control"></input>
        <label>Avatar</label>
        <input className="form-control"></input>
        <button className="btn btn-primary">Update</button>
      </form>
    );
  }
}

export default FormCv;
