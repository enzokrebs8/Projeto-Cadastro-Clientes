const Cliente = require('../models/clienteModel');

exports.getAllClientes = (req, res) => {
    Cliente.getAll((err, data) => {
        if (err) throw err;
        res.render('clientes', { clientes: data });
    });
};

exports.getClienteById = (req, res) => {
    const id = req.params.id;
    Cliente.getById(id, (err, data) => {
        if (err) throw err;
        res.render('editCliente', { cliente: data });
    });
};

exports.addCliente = (req, res) => {
    res.render('addCliente');
};

exports.createCliente = (req, res) => {
    const data = {
        nomeCliente: req.body.nomeCliente,
        email: req.body.email,
        telefone: req.body.telefone
    };
    Cliente.create(data, (err, id) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};

exports.updateCliente = (req, res) => {
    const id = req.params.id;
    const data = {
        nomeCliente: req.body.nomeCliente,
        email: req.body.email,
        telefone: req.body.telefone
    };
    Cliente.update(id, data, (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};

exports.deleteCliente = (req, res) => {
    const id = req.params.id;
    Cliente.delete(id, (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};
