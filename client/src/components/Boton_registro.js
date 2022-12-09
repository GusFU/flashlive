import React from "react";

import usePost from "../hooks/usePost";

export default function Boton_registro({ info }) {

    const { data, pending, error, execute } = usePost

    function registrando() {




        if (info.registrandose === false) { info.setRegistrandose(!info.registrandose) }


        info.setYa_registrado(!info.ya_registrado)
    }

    return (
        <button onClick={() => registrando()}>Registrate</button>
    )
}