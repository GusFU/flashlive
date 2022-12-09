import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Principal from "../components/Principal";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
