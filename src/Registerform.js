import React,{ Component } from 'react';

class  RegisterForm extends Component{
    render(){
        return(
            <div className="data">
                <form onSubmit={this.props.handleSubmit}>
                <h2>REGISTER WITH YOUR DETAILS</h2><br></br>
                    <label>Name :</label><br></br>
                    <input onBlur={this.props.handelChange} title="Your Name" type="text" name="name" required placeholder="Your Name" autoComplete="on" /><br></br>
                    <label>Age :</label><br></br>
                    <input onBlur={this.props.handelChange} title="Your Age" type="text" name="age" required placeholder="Your Age" autoComplete="on" /><br></br>
                    <label>email :</label><br></br>
                    <input onBlur={this.props.handelChange} title="Your Email" type="email" name="email"required placeholder="Email Address" /><br></br>
                    <label>Set Password :</label><br></br>
                    <input onBlur={this.props.handelChange} title="Set Password" type="password" name="password" required placeholder="password" /><br></br>
                    <label>Confirm Password :</label><br></br>
                    <input onBlur={this.props.password} type="password" name="cpassword" required placeholder="Enter same password" /><br></br>
                    <label>By creating an account you agree to our Terms & Privacy</label>
                    <input type="submit" value="SIGNUP" id="logbtn" />
                </form>
            </div>
        );
    }
}
export default RegisterForm