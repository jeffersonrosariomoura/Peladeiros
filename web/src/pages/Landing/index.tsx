import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';

import ballImg from '../../assets/images/ball.png';
import whistleImg from '../../assets/images/whistle.png';
import embassyPlayerImg from '../../assets/images/embassy_player.png';
import runningPlayerImg from '../../assets/images/running_player.png';

import './styles.css';

const Landing = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={ballImg} alt="Peladeiros" />
                    <h2>Peladeiros Beer sua plataforma de futebol</h2>
                </div>

                <img
                    src={logoImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/match" className="study">
                        <img src={runningPlayerImg} alt="Pelada" /> 
                        Pelada
                    </Link>
                    <Link to="/player" className="give-classes">
                        <img src={embassyPlayerImg} alt="Jogador" />
                        Jogador
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 10 jogadores já confirmados  <img src={whistleImg} alt="Apito" /> 
                </span>
            </div>
        </div>
    )
}

export default Landing;