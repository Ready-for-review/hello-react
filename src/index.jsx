import React from "react"
import ReactDOM from "react-dom"

const HelloWorld = props => <div>Hello World {props.name} in React in Fancy</div>;

function HelloWorld20(props){
  return <div>Hello World 2.0 {props.children}</div>
}

function Counter({count = 10}){
  var[counter, setCounter] = React.useState(count)
  return (
    <div>
      {counter}
      <button onClick={event => setCounter(counter ++ ) }>+</button>
    </div>
  )
}

function App(){
  return <div><Counter count={0}/> <Counter count={5}/> <Counter/></div>
}


var rootElement = document.getElementById("root")
ReactDOM.render(<App/>,rootElement)
