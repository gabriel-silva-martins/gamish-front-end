import { useState } from "react";
import Home from "./home/Home.js"
import CreateNewUser from "./login/CreateNewUser.js";
import Login from "./login/Login.js"

function App() {

  const [page, setPage] = useState('Home')
  const [user, setUser] = useState({})

  return (
    <div>
      {page === "Home" && <Home setPage = {setPage} user = {user} setUser = {setUser}/>}
      {page === "Login" && <Login setPage = {setPage} setUser = {setUser}/>} 
      {page === "CreateNewUser" && <CreateNewUser setPage = {setPage} setUser = {setUser}/>}
    </div>
  );
}

export default App;