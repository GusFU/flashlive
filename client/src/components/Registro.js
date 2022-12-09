import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton_registro from "./Boton_registro";

export default function Registro() {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("");
    const [apellido1, setApellido1] = useState("");
    const [apellido2, setApellido2] = useState("");
    const [cumpleanos, setCumpleanos] = useState("");
    const [alias, setAlias] = useState("");
    const [estado_civil, setEstado_civil] = useState("");
    const [pais, setPais] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [ya_registrado, setYa_registrado] = useState(true);
    const [registrandose,setRegistrandose]= useState(false)

    const info = {
        nombre,
        apellido1,
        apellido2,
        cumpleanos,
        alias,
        estado_civil,
        pais,
        email,
        contrasena,
        ya_registrado,
        registrandose,
        setYa_registrado,
        setRegistrandose
    }
// useEffect(()=>{
// console.log(nombre)
// },[ya_registrado])
   
    return (
        <div className="registro">

            <div className="mensage"><p>{ya_registrado ? "" : "El email ya esta registrado"}</p></div>
            <label>Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&nombre === ""?"Debes escribir tu nombre":""}</p></div>

            <label>Primer apellido</label>
            <input type="text" onChange={(e) => setApellido1(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&apellido1 === ""?"Debes escribir tu primer apellido":""}</p></div>

            <label>Segundo apellido</label>
            <input type="text" onChange={(e) => setApellido2(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&apellido2 === ""?"Debes escribir tu segundo apellido":""}</p></div>

            <label>Fecha de nacimiento</label>
            <input type={"date"} onChange={(e) => setCumpleanos(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&cumpleanos === ""?"Debes seleccionar tu fecha de nacimiento":""}</p></div>

            <label>Alias</label>
            <input type="text" onChange={(e) => setAlias(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&alias === ""?"Debes escribir tu alias":""}</p></div>

            <label>Estado civil</label>
            <input type="text" onChange={(e) => setEstado_civil(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&estado_civil === ""?"Debes escribir tu estado civil":""}</p></div>

            <label>Pais</label>
            <input type="text" onChange={(e) => setPais(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&pais === ""?"Debes escribir tu pais":""}</p></div>

            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&email === ""?"Debes escribir tu email":""}</p></div>

            <label>Contraseña</label>
            <input type="password" onChange={(e) => setContrasena(e.target.value)} />
            <div className="mensage"><p>{registrandose === true &&contrasena === ""?"Debes escribir tu contraseña":""}</p></div>



            <Boton_registro ya_register={setYa_registrado} info={info}  />
            <button onClick={()=>navigate("/")}>Atras</button>
        </div>
    )
}