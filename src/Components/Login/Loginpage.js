import React from 'react';
import db,{ auth, googleProvider } from '../../Firebase';
import './Loginpage.css';
import { useNavigate } from 'react-router';


function Loginpage() {
    const navigate = useNavigate();
    const signInWithGoogle = ()=>{
        auth.signInWithPopup(googleProvider)
        .then((result)=>{
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                userId: result.user.uid
            };
            navigate(-1);
            db.collection('users').doc(result.user.email).set(newUser);
        })
        .catch((err)=>{alert(err.message)});
    }
   
  return (
   <>
        <div className="login">
            <div className="bag-img">
                <img src="bag.jpg" alt="" />
            </div>
            <form>
                <div className="inp" style={{'marginTop': '4rem'}}>
                    <input type="email" name="email" id="email" required/>
                    <span>Email</span>
                </div>
                <div className="inp">
                    <input type="password" name="password" id="password" required/>
                    <span>Password</span>
                </div>
                <button type='submit' style={{'marginTop': '1.2rem'}}>Submit</button>

                <button type='button' onClick={signInWithGoogle}>Sign in with google</button>
            </form>
        </div>
   </>
  )
}

export default Loginpage