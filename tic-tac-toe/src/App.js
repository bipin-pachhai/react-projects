import React, { useState } from "react";
import logo from "./logo.svg";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


const itemArray = new Array(9).fill("empty");
const App = () => {
//Use of states
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  


  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);

  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };
    
  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage, {type: 'success'});
    }
    if(itemArray[itemNumber] == "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      checkIsWinner();

    }
    else{
      return toast("Already filled", {type: 'error', autoClose: 1000, pauseOnHover: true});
    }
    

  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
         
           <div className="grid">

            {//javascript is embedded inside curly bracess
            itemArray.map((item, index) => (
              <Card onClick ={() =>{ changeItem(index)}}>
                <CardBody className="box">
                  <Icon name={itemArray[index]} />
                </CardBody>
              </Card>
            ))}
          </div>
          {winMessage ? (
            <div className = "mb-2 mt-2" >
            <h1 className="text-primary text-uppercase text-center">{winMessage}</h1>
            <Button color="success" block onClick = { reloadGame} >Reload Game</Button>
            </div>
            
           
          ): ( 
          <h1 className = " text-center text-warning">{isCross?"It's Cross's":"It's Circle's"} Turn</h1>   

          )
          };
        </Col>
      </Row>
    </Container>
  );
};

export default App;
