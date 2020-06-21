import React,{ Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Welcome to HomePage { this.props.username }</h2>
                <h3>Your Personel Detail : </h3>
                <h4>Age : {this.props.age}</h4>
                <h4>Email : {this.props.email}</h4>
            </div>
        );
    }
}

export default Home;