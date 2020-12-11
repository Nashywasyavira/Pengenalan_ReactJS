import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';
import Media from './Components/Media';

class App extends Component {
  render(){
    return(
      <div className="App container col-sm-6">
        <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
          <hr />
          <h4>Alert Control</h4>
          <b className="text-left">Tipe Alert</b>   
          <select className="form-control" name="type" value={this.state.type}     
            onChange={this.changeTypeAlert}>     
            <option value="success">Success</option>     
            <option value="warning">Warning</option>  
            <option value="danger">Danger</option>  
            <option value="info">Info</option>  
          </select>  
          <b className="text-left">Header Alert</b>  
          <input  
            type="text" name="header" className="form-control" value={this.state.header}  
            onChange={this.changeHeaderAlert} />  
          <b className="text-left">Content Alert</b>  
          <input  
            type="text" name="content" className="form-control" value={this.state.content}  
            onChange={this.changeContentAlert} />        
        </Alert>
        <Media image="react.png" title="React JS"> 
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis  
        </Media>  
        <Media image="angular.png" title="Angular JS"> 
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis  
        </Media>      
      </div>
    );
  }
  constructor(){
    super();
    this.state = {
      type: "success",
      header: "Nama Anda",
      content: "Nashywa Syavira Nur Arliza "
    };
  }
  changeTypeAlert = (event) =>{  
    this.setState({type: event.target.value});  
  }  
  changeHeaderAlert = (event) => {  
    this.setState({header: event.target.value});  
  }  
  changeContentAlert = (event) => {  
    this.setState({content: event.target.value});  
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
