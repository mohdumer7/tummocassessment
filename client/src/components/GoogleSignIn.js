import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = () => {
  const responseGoogleSuccess = (response) => {
    console.log(response)
  };

  const responseGoogleFailure=(err)=>{
    console.log(err)
    // window.location.reload()
  }

  return (
    <GoogleLogin
      clientId="968153154109-uupr0jln1k0v7c36sfbno5bk2ar4nl3j.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
