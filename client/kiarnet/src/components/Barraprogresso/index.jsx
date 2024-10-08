import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar} from "react-step-progress-bar";
export default function Barraprogresso(props){
    return(

      <ProgressBar
        percent={props.progresso}
        width={'75%'}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
      </ProgressBar>
    );
  }
    
