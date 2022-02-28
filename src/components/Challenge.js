import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import _ from 'lodash';

function Challenge() {

  const [stringInput, setStringInput] = useState([]);
  const [doubledNumbers, setDoubledNumbers] = useState([]);
  const [arrayInput, setArrayInput] = useState('');
  const [arrayOutput, setArrayOutput] = useState([]);
  const [arrayDoubleOutput, setArrayDoubleOutput] = useState([]);

  useEffect(() => {
    let numbersArray = [];
    let combineNumbersArray = [];
    let singleArray = [];
    let isNumberFlag = true;
    let finalArrayLength = 1;

    _.map(stringInput, (number) => {
      if (isNaN(number)) {
        setDoubledNumbers(doubledNumbers)
        numbersArray = []
        finalArrayLength = isNumberFlag && singleArray.length > 0 ? finalArrayLength + 1 : finalArrayLength;
        isNumberFlag = false
      } else {
        isNumberFlag = true
        numbersArray.push(number)
        combineNumbersArray.push(numbersArray.join(''))

        singleArray = singleArray.slice(0,finalArrayLength - 1)
        singleArray.push(combineNumbersArray.slice(1 - finalArrayLength))
        combineNumbersArray = []
      }
  });
  setDoubledNumbers(singleArray.map(num => num * 2))
  }, [stringInput]);

  const handleOnClick = () =>{
    arrayOutput.push(arrayInput)
    console.log('1', arrayOutput)
    console.log('2', arrayInput)
    setArrayInput('')
    setArrayOutput(arrayOutput)
    setArrayDoubleOutput(arrayOutput.map(num => num * 2))
  }

  return (
    <>
    <StringToArrayContainer>
      <LabelContainer>
        <h2>String to Array</h2>
      </LabelContainer>
      <StringInputContainer>
          <input type='text' placeholder='Input' value={stringInput} onChange={(e) => setStringInput(e.target.value)} />
      </StringInputContainer>
      <OutputContainer>
        <textarea type='text' placeholder='Output' value={doubledNumbers} />
      </OutputContainer>
    </StringToArrayContainer>

    <ArrayToArrayContainer>
      <LabelContainer>
        <h2>Array to Array</h2>
      </LabelContainer>
      <ArrayInputContainer>
          <input type='text' placeholder='Input' value={arrayInput} onChange={(e) => setArrayInput(e.target.value)}/>
          <button type='button' onClick={() => handleOnClick() }>Add</button>
          <textarea type='text' placeholder='Input' value={arrayOutput} />
      </ArrayInputContainer>
      <OutputContainer>
        <textarea type='text' placeholder='Output' value={arrayDoubleOutput} />
      </OutputContainer>
    </ArrayToArrayContainer>
    </>

  );
}

export default Challenge;

const StringToArrayContainer =  styled.div`
  margin-top: 120px;
  margin-left: 260px;
  display: flex;
  max-height: 200px;
  position: fixed;
`;

const ArrayToArrayContainer =  styled.div`
  display: flex;
  color: white;
  margin-top: 400px;
  border-top: 1px solid #49274b;
  position: fixed;
  margin-left: 260px;
`;

const LabelContainer =  styled.div`
  display: flex;
  align-items: center;
  margin: 5px 20px;
  color: black;
`;

const StringInputContainer =  styled.div`
  display: flex;
  flex: 0.5;
  border-radius: 6px;
  background-color: wheat;
  text-align: center;
  border: 1px gray solid;
  padding: 30px;
  margin: 50px;

  > input {
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: black;
  }
`;

const ArrayInputContainer =  styled.div`
  display: flex;
  flex: 0.5;
  border-radius: 6px;
  background-color: wheat;
  text-align: center;
  border: 1px gray solid;
  padding: 30px;
  margin: 50px;
  max-width: 550px;

  > textarea {
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-align: center;
    outline: 0;
    color: black;
  }

  > input {
    font-size: 20px;
    border: none;
    min-width: 5vw;
    color: black;
    text-align: center;
  }

  > button {
    font-size: 20px;
    border: none;
    min-width: 5vw;
    color: black;
    cursor: pointer;
    background-color: whitesmoke;
  }

  > textarea {
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: black;
  }
`;

const OutputContainer =  styled.div`
  display: flex;
  flex: 0.5;
  border-radius: 6px;
  background-color: wheat;
  text-align: center;
  border: 1px gray solid;
  padding: 30px;
  margin: 50px;

  > textarea {
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: black;
  }
`
