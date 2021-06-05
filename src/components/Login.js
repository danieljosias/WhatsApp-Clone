import React from 'react';
import './Login.css';
import Api from '../Api';

function Login({onReceive}) {
    const handleFacebookLogin =  async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!")
        }
    }

    return (
        <div className="login">
            <div className="login--title"><h1>DevZap</h1></div>

                <form action="">
                    <label htmlFor=""> </label>
                    <input type="text"  placeholder="Email"/>
                    <br/>
                    
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Senha" />
                    <br/>
                </form>
                
                <div>
                    <button className="login--btn">Entrar</button>
                </div>
                    
                <div>
                    <a className="login--link" onClick={handleFacebookLogin}>Entrar com Facebook</a>
                </div>
        </div>

    )
}

export default Login;
