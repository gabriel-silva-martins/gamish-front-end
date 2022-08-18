import React, { useState, useEffect } from "react";
import { gamishApi } from "../api/gamish_api";

function CreateNewUser({setPage, setUser}) {

    const [canCreate, setCreate] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {

        const verifyLogin = async () => {
            await gamishApi.get(`/VerifyUser?login=${username}`).then(
                (response) => {
                    if(response.data.status=== "Ok" && username.length >=5)  setCreate(true)
                    else setCreate(false)
                }
            )
        }

        verifyLogin();
    }, [username])

    function HandleUsername(event) {
        setUsername(event.target.value)
    }

    function HandlePassword(event) {
        setPassword(event.target.value)
    }

    function HandleEmail(event) {
        setEmail(event.target.value)
    }

    async function HandleSubmit(event) {
        event.preventDefault()
        const data = {
            username: username,
            password: password,
            email: email
        }

        if(username !== '' && password !== '') {
            const response = await gamishApi.post('/CreateUser', data)
            setUser(response.data)
            setPage('Home')
        }else{
            alert('Por favor, preencha os campos solicitados!')
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <label>Nome de usuário:</label>
                    <input type="text" placeholder="*Nome de usuário" onChange={HandleUsername}></input>
                    <label>Senha:</label>
                    <input type="password" placeholder="*Senha" onChange={HandlePassword}></input>
                    <label>E-mail:</label>
                    <input type="email" placeholder="E-mail" onChange={HandleEmail}></input>
                    <button type="submit" disabled={!canCreate}>Criar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewUser