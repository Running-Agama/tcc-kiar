import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar} from "react-step-progress-bar";
export default function Barraprogresso(props){
    return(

      <ProgressBar
        percent={props.progresso}
        width={'75%'}
        height={'25px'}
        filledBackground="linear-gradient(to right, #7959c2, #8d68e3)"
      >
      </ProgressBar>
    );
  }
    
