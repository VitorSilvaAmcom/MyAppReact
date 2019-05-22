import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Post from './Post';

export default class App extends React.Component{

  render(){

    return(
      <div>
        <h1>Hello World</h1>
        <Post title="Aprendendo React com a RocketSeat"/>
        <Post title="ReactJS é demais!!"/>
        <Post title="Em breve mais videos de React"/>
      </div>
    

    );
  }
}

/*
function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;*/
