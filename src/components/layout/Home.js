import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const Home = (props) => { 
    const { auth } = props;
    console.log("auth-check", auth.uid);
    if (auth.uid) {
        return (
            <Redirect to='/' />     
        )    
    } else { 
        return <Redirect to='/signin' />
    }

   
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
   
}

export default connect(mapStateToProps)(Home)