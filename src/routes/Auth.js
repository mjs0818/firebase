import React, { useState } from 'react';
import { authService, firebaseInstance } from '../fbase';
import AuthForm from './AuthFrom';

const Auth = () => {
  const onSocialClick = async (event) => {
    console.log(event);
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with google
        </button>
      </div>
    </div>
  );
};
export default Auth;
