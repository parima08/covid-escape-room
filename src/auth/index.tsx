import React from 'react'
import { useCookies } from 'react-cookie';
import GapiApi from './GapiApi';


export default function Auth(){
  const [cookies, setCookie, removeCookie] = useCookies(['login']);
  const [authCookies, setGoogleAuthCookies , removeGoogleAuthCookie] = useCookies(['G_AUTHUSER_H']);
  
  async function handleSignIn(){
      const cb = () => {
        setCookie('login', true, {path: '/'});
        setCookie('lastSolvedClue', 1);
      }
      GapiApi.shared.signIn(cb, removeCookie, removeGoogleAuthCookie);
  }

  return(
    <>
      <div className = "login-page">
        <div className = "login-box">
          <h1>Welcome!</h1>
          <p>Please login using your email id:</p>
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <button onClick={handleSignIn}>Sign in</button>
        </div> 
      </div>
    </>
  );
}
