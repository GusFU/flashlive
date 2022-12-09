const mongoose = require("mongoose");
const mysql = require('mysql');
const Me_gusta_foto = require('../models/me_gusta.model');
const Fotos = require('../models/fotos.model')
const comentarios = require('../models/comentarios_recibidos.model')
const user = require("./user.controllers2");
const comentariosenfotos = require("../models/comentariosenfotos");
const jwt = require("jsonwebtoken");
const SECRET = "tallerjwt";
const sendMail = require("../email");
const multer = require('multer')({
    dest: 'public/images'
})

const cruds = {

    login : async (req, res) => {
        
    }

}