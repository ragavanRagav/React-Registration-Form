import React,{ Component } from 'react';
class Login extends Component{
    render(){
        return(
            <div className="data">
                <h2>Login</h2>
                <form onSubmit={this.props.authendication}>
                    <label>Username : </label><br></br>
                    <input onBlur={this.props.handelChange} type="text" name="luser" placeholder="Enter username" /><br></br>
                    <label>Password : </label><br></br>
                    <input onBlur={this.props.handelChange} type="password" name="lpass" placeholder="Enter password" /><br></br>
                    <input value="Login"  type="submit" id="logbtn" />
                </form>
            </div>
        );
    }
}
export default Login;
