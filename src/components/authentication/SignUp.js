import React, { Component } from 'react';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends Component{

    state = { 
        email: '',
        password: '',
        firstname: '',
        lastname:''
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.id]:e.target.value
        })
       
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {

        const { authError } = this.props;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        
                        <div className="input-field">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" required id="firstname" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" required id="lastname" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" required id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" required id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                        <button className="btn waves-effect waves-light">Sign Up<i className="material-icons right">send</i></button>
                        <Link to='/signin' className="btn waves-effect waves-light">Login<i className="material-icons right">send</i></Link>
                            <div className="red-text center">
                                { authError ? <p>{authError}</p> : null }
                           
                            </div>
                    </div>
                   

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //auth: state.firebase.auth
        authError:state.auth.authError
    }
        
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp:(newUser) => dispatch(signUp(newUser))
    }
        
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)