import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
export default function App() {
  const state = useSelector((state) => state);
  // const account = useSelector((account) => state.account)
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(depositMoney, withdrawMoney);
  return (
    <div>
      <h1>{state.account}</h1>
      <button onClick={() => depositMoney(1000)}>deposit</button>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>
    </div>
  );
}
