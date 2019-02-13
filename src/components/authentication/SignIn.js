import React, { Component } from 'react';
import { connect } from 'react-redux';
import signIn from '../../store/actions/authActions';
import { Link } from 'react-router-dom';

class SignIn extends Component {

    state = { 
        email: '',
        password: '',
        loginCounter: 1
    }


    handleChange = (e) => { 
        this.setState({
            [e.target.id]: e.target.value
        })
       
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.signIn(this.state);
        

        const { authError } = this.props;

        if (authError) {
            this.setState({ loginCounter: this.state.loginCounter + 1 })
            console.log(this.state.loginCounter, authError);
        }
        
    }

    render() {
        
        const { authError } = this.props;
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" required id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light">Login<i className="material-icons right">send</i></button>
                        <Link to='/signup' className="btn waves-effect waves-light">Sign Up<i className="material-icons right">send</i></Link>
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
            authError:state.auth.authError
        }
            
    }
     

const mapDispatchToProps = (dispatch) => {
    return {
        signIn:(credent) => dispatch(signIn(credent))
    }
        
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)