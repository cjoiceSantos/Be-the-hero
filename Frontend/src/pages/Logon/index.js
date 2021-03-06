import React, {useState} from 'react';

import { FiLogIn } from 'react-icons/fi';
import  {Link, useHistory}  from 'react-router-dom';
import './styles.css';
import heros_emage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import api from '../../services/api';


export default function Logon() {
    
    const history = useHistory();
    const [id,setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('session', {id});
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile'); 

        } catch (err) {
            alert("Falha no login, tente novamente.");
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt = "Be the Hero"/>
                
                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    
                    <button className="button" type="submit"> Entrar </button>
                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>
            <img src={heros_emage} alt="Heroes"/>
        </div>        
    );
}