import * as React from "react";
import styled from 'styled-components';
import {Modal} from 'react-responsive-modal';


import Half from "../ProgressBar/half";
import ThreeQuarters from "../ProgressBar/threeQuarters";
import Fixed from "../ProgressBar/fixed";

import Main from "./Curation/main";
import StepOne from "./Curation/step_one";
import StepTwo from "./Curation/step_two";
import StepThree from "./Curation/step_three";
import StepFour from "./Curation/step_four";

const Button = styled.button`
background: transparent;
  color: #6865fc;
  border: 2px solid #6865fc;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.4em 2em;
  cursor: pointer;
  min-width: fit-content;
  float: right;
`;

const Curation = ({}): React.ReactElement => {

  const [open, setOpen] = React.useState<boolean>(false);
  const [curationStep, setStep] = React.useState<number>(1);

  let stepLayout = <></>

  const onOpenModal = () => {
    setOpen(true);
    setStep(1);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const nextButton = (res: any) => {
      console.log(curationStep);
      console.log('Res : ', res);

      setStep(curationStep+1);
  };

  const beforeButton = (res: any) => {
    console.log(curationStep);
    console.log('Res : ', res);

    setStep(curationStep-1);
  }
  if(curationStep == 1){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            width : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8,
            minWidth : 500
        }
            }}>
        <Main nextButton={nextButton}/>
    </Modal>

  }
  else if(curationStep == 2){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepOne nextButton={nextButton} beforeButton={beforeButton}/>
    </Modal>
  }
  else if(curationStep == 3){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepTwo nextButton={nextButton} beforeButton={beforeButton}/>
    </Modal>
  }
  else if(curationStep == 4){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepThree nextButton={nextButton} beforeButton={beforeButton}/>
    </Modal>
  }
  else{
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepFour nextButton={nextButton} beforeButton={beforeButton}/>
    </Modal>
  }
  
  return (
    <>
      <Button onClick={onOpenModal}>
          뮤지션매칭
      </Button>
      {stepLayout}
      
    </>
  );
};

export default Curation;