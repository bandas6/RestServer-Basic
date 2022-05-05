const { request } = require('express');
const {response} = require('express')


const usuarioGet = (req = request, res = response) => {

    const {q , nombre , apik = "as"} = req.query;

    res.json({
        msg:'Get Api --Controller',
        q,
        nombre,
        apik
    })
}


const usurioPut = (req, res) => {

    const id = req.params.id;



    res.json({
        msg:'Put Api...',
        id
    })
}

const usuarioPost = (req, res) => {

    const {nombre , edad} = req.body;

    res.json({
        msg:'Post Api',
        nombre,
        edad
    })
}

const usuariosPath =  (req, res) => {
    res.json({
        msg:'Get Patch'
    })
}

const usuarioDelete = (req, res) => {
    res.json({
        msg:'Delete Api'
    })
}

module.exports = {
    usuarioGet,
    usurioPut,
    usuarioPost,
    usuarioDelete,
    usuariosPath
}