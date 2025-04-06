import styled from 'styled-components';

// const Heading =  styled.h1`
//   color : red;
//   border : 1px solid green;
//   background-color : blue;
//   padding : 10px;
//   text-align : center;
//   border-radius : 10px;
// `

const Heading = styled.h1({
  color : 'red',
  border : '1px solid green',
  backgroundColor : 'blue',
  padding : '10px',
  textAlign : 'center',
  borderRadius : '10px',
})

const StyleBtn = styled.button`
  background-color : blue;
  color : white;
  padding : 10px;
  border : none;
  border-radius : 5px;
  cursor : pointer;
  width : 200px;
  height : 50px;
  margin-right : 50px;
`

function App() {

  return (
    <>
      <h1> Styled Component with React Js </h1>
      <Heading> Hello World </Heading>
      <Heading> Hello World </Heading>
      <Heading> Hello World </Heading>
      <StyleBtn> Click Me </StyleBtn>
      <StyleBtn> Click Me </StyleBtn>
      <StyleBtn> Click Me </StyleBtn>
    </>
  );
}

export default App;
