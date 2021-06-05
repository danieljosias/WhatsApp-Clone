import React from 'react'
import './ChatIntro.css';

import logo from '../img/logo-zap.png';

import ComputerIcon from '@material-ui/icons/Computer';

function ChatIntro() {
    return (
        <div>
            <div className="chatIntro">
                <img src={logo} alt="" />
                <h1>Mantenha seu celular conectado</h1>
                <h2>O DevZap conecta ao seu telefone para sicronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.</h2>
                
                <span><ComputerIcon className="chatIntroIcon" style={{color: '#919191'}}/>O DevZap está disponível para Windowns. <a className="chatIntroLink">Obtenha-o aqui.</a> </span>
            </div>
        </div>
    )
}

export default ChatIntro;
