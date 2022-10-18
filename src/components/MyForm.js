import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    //6 - controlled inputs
    //-3 Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando formulario");
        console.log(name, email, bio, role);
        //validacao
        //envio

        // 7- limpar formulario

        setName("");
        setEmail(""); 
        setBio("");
        setRole("");
    }

    const handleName = (e) =>{
        setName(e.target.value);
    }
    

  return (
    <div>
        {/*5- envio de form*/}
        {/*1- criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name= "name" placeholder="Digite o seu nome"  onChange={handleName} value={name}/>
                
                 {/*2- label envolvendo input */}
                 <label>
                    <span>E-mail: </span>
                    {/*4- simplificação de manipulação  de state*/}
                    <input 
                     type="email" 
                     name="email" 
                     placeholder="Digite o seu e-mail" 
                     onChange={(e) => setEmail(e.target.value)} 
                     value={email}
                     />
                 </label>
                 {/* 08 - Textarea */}
                 <label>
                    <span>Bio: </span>
                    <textarea
                     name="bio" 
                     placeholder="Descrição do usuário" 
                     onChange={(e) => setBio(e.target.value)} value={bio}
                     />
                 </label>
                 {/* 09- select */}
                 <label>
                    <span>Função: </span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value= {role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                 </label>
                <input type="submit"  value="Enviar"/>
            </div>
        </form>
    </div>
  )
}

export default MyForm