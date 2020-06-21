import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import RegisterForm from './Registerform.js';
import Home from './Home.js'
class App extends Component{
  constructor(props){
  super(props);
  this.state={name:'',age:'',email:'',password:'',passmatch:false,showregform:true,showlogform:false,showhomepage:false,luser:'',lpass:''};
  this.handelChange = this.handelChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.authendication = this.authendication.bind(this);
}
handelChange=(event)=>{
  const val = event.target.name;
      this.setState({[val] : event.target.value});
}
handleSubmit=(event)=>{
  event.preventDefault();
  if(this.state.passmatch){
    this.setState({showregform:false,showlogform:true});
  }
  else{
    alert("Password Missmatch ");
  }
}
password = (event) =>{
  {(event.target.value === this.state.password) ?
      this.setState({passmatch:true}) :
      this.setState({passmatch:false}) }
  }
authendication=(event)=>{
  event.preventDefault();
        var st = this.state;
        if ((st.luser === st.email) && (st.lpass === st.password)) {
          this.setState({showlogform:false , showhomepage:true});
        }
        else{
          this.setState({ showhomepage : false });
          alert("Invalid Username / Password");
        }
}
  render(){
  return (
    <div className="main">
      { (this.state.showregform===true) ? 
        <RegisterForm handelChange={this.handelChange} handleSubmit={this.handleSubmit} password={this.password} /> : ""
      }
      { (this.state.showlogform === true )? 
        <Login handelChange={this.handelChange} authendication={this.authendication} /> : ""}
      { (this.state.showhomepage === true )? 
        <Home username={this.state.name} age={this.state.age} email={this.state.email} /> : ""}
    </div>
  );
  }
}
export default App;