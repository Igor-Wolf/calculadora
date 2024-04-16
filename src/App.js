import Input from './components/Input'
import Button from './components/Button'
import React, { useState } from "react";
import { Container, Content, Row } from "./styles";

const App = () => {

  //-----------------------------------------------------------funções

  const [operation, setOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState('0');
  const handleAddNumber = (number) => {

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const [firstNumber, setFirstNumber] = useState('0');

  const handleClear = () => {

    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation("")


  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    }
    else {

      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')


    }

  }

  const handleSubNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    }
    else {

      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')


    }

  }

  const handleMultNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')

    }
    else {

      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')


    }
  }
  const handleDivNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')

    }
    else {

      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')


    }

  }

  const handleEquals = () => {

    if (!firstNumber === '0' && operation !== '' && currentNumber !== '0') {

      switch (operation) {

        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;

      }

    }


  }
  //-------------------------------------------------------------Retornos na tela
  return (
    <Container>
      
      <Content>
      <h3>Calculadora</h3>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" onClick={handleMultNumbers}></Button>
          <Button label="/" onClick={handleDivNumbers}></Button>
          <Button label="C" onClick={handleClear}></Button>
          <Button label="-" onClick={handleSubNumbers}></Button>

        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}> </Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="+" onClick={handleSumNumbers}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="=" onClick={handleEquals}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="0" onClick={() => handleAddNumber('0')}></Button>

        </Row>


      </Content>
    </Container>
  );
}

export default App;
