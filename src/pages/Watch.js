import React, { useEffect, useReducer } from "react";

function Watch() {
  function dispatchHandler(state, action) {
    console.log(action, state);
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "reset":
        return { count: 0, isRunning: false };
      case "step":
        return { ...state, count: state.count + 1 };
    }
  }
  const initialState = {
    count: 0,
    isRunning: false,
  };
  const [state, dispatch] = useReducer(dispatchHandler, initialState);

  useEffect(() => {
    if (state.isRunning) {
      let idInterval = setInterval(() => {
        dispatch({ type: "step" });
      }, 1000);
      return () => clearInterval(idInterval);
    }
  }, [state.isRunning]);
  return (
    <>
      <h3> {state.count} </h3>
      <br></br>
      <button
        onClick={() => dispatch({ type: "start" })}
        style={{ margin: "0 20px" }}
        className="btn btn-success"
      >
        Start
      </button>
      <button
        onClick={() => dispatch({ type: "stop" })}
        style={{ margin: "0 20px" }}
        className="btn btn-danger"
      >
        Stop
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ margin: "0 20px" }}
        className="btn btn-info"
      >
        Reset
      </button>
    </>
  );
}

export default Watch;
