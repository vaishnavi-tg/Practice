function App() {
  return (
    <div>
      <CardWrapper>
        Hii their   
      </CardWrapper>
      <CardWrapper>
        Hii their 2  
      </CardWrapper>
    </div>

  )
}

function CardWrapper({children}) {
  return (
    <div style={
      {border: "20px solid black",
        margin:"2px",
      paddingTop:"2px"}
    }>
    <h1>{children}</h1>
    </div>
  )
}

export default App