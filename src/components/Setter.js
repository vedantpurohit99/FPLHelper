import React from "react";

import Selector from "./Selector"
import Selected from "./Selected"

function Setter(props){
  if(!(props.set)){
    return <Selector setPlayer={props.setPlayer} error={props.error} />
  }
  return <Selected fName={props.fName} lName={props.lName} reset={props.reset} setActive={props.setActive} />
}


export default Setter;
