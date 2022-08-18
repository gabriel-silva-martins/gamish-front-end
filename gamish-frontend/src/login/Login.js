import React, { useState } from "react"
import "./Login.css"
import { gamishApi } from "../api/gamish_api"
import "./CreateNewUser"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

function Login({setPage, setUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    function HandlePageToHome() {
        setPage('Home')
    }

    function HandleToCreate() {
        setPage('CreateNewUser')
    }

    function HandleUsername(event) {
        setUsername(event.target.value)
    }

    function HandlePassword(event) {
        setPassword(event.target.value)
    }

    async function HandleLogin() {
        const loginObject = {
            username: username,
            password: password
        }
        await gamishApi.post('/Login', loginObject).then(
            (response) => {
                if (response.data.id !== null) {
                    setUser(response.data) // Retorna, ID, username e status
                    setPage('Home')
                }
            }
        )
        .catch(
            (response) => {
                
            }
        )
    }

    return(
        <div className="pgLogin">
            <input type="button" value="Voltar" onClick={HandlePageToHome} className="btnVoltar"/>
            <section className="container">
            <h1 id="loginName">Login</h1>
            <fieldset className="loginUsername">
                <label name="Usuario">Usuário </label>
                <input type="text" className="input"  placeholder="Usuário" onChange={HandleUsername}/> 
            </fieldset>
            <fieldset className="loginPassword">
                <label name="Senha">Senha </label>
                <input type="password" className="input" placeholder="Senha" onChange={HandlePassword}/>
            </fieldset>
                <input type="button" className="btnLogin" value="Login" onClick={HandleLogin}/>
                <p className="notUser">Ainda não é usuário ? <input type="button" className="toCreateLogin" value=" Clique aqui!" onClick={HandleToCreate}></input></p>
                <div className="socialMedia">
                    <a href="#"className="socialMediaFace"><FaFacebook /></a>
                    <a href="#" className="socialMediaInsta"><FaInstagram /></a>
                    <a href="#" className="socialMediaYtb"><FaYoutube /></a>
                    <a href="#" className="socialMediaTw"><FaTwitter /></a>
                </div>
            </section>
        </div>
    )
}

export default Login