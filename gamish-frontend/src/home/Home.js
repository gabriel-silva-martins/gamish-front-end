import React from "react"
import "./home.css" 
import logo2 from "../img/logo2.png"

function Home({setPage, user, setUser}) {

    function HandlePageToLogin() {
        setPage('Login')
    }

    function HandleLogoff() {
        setUser({})
    }
    // Object.keys(user).length !== 0 Logado //
    return (
        <div id="main">
            <header>
            {Object.keys(user).length !== 0 && <span className="">Olá, {user.username}</span>}
            {Object.keys(user).length !== 0 && <input type="button" className="" id="btnLogoff" onClick={HandleLogoff} value="Deslogar"></input>}
            <ul className="nav">
                {Object.keys(user).length === 0 && <li className="nav-itens" id="btnLogin" onClick={HandlePageToLogin}>Login</li>}
                <li className="nav-itens" id="loja">Loja</li>
                <li className="nav-itens" id="sobre">Sobre</li>
                {Object.keys(user).length !== 0 && <li className="nav-itens" id="minhaBiblioteca">Minha Biblioteca</li>}
            </ul>
            </header>
        </div>
    )
}

export default Home