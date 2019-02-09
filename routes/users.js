let express = require('express');
let router = express.Router();
let userService = require('../helpers/userservice');

router.get('/getUsers', async (req, res) => {
    try {
        let users = await userService.getUsers();
        console.log(users);
        res.send({status: 200, message: "Lista generada", data: users});
    } catch (e) {
        res.send({status: 500, message: "Error", data: e});
    }
});
router.get('/getUserById/:id', (req, res) => {
    userService.getUserById(req.params.id).then((data) => {
        res.send({status: 200, message: "Lista generada", data: data});
    }).catch(err => {
        res.send({status: 500, message: "Error", data: err});
    })
});
router.post('/createUser', (req, res) => {
    userService.createUser(req.body).then(data => {
        res.send({status: 200, message: "Usuario creado exitosamente", data: data});
    }).catch(err => {
        res.send({status: 500, message: "Error", data: err});
    });
});
router.put('/updateUserById/:id', (req, res) => {
    userService.updateUser(req.params.id, req.body).then(data => {
        res.send({status: 200, message: "Usuario actualizado exitosamente", data: data});
    }).catch(err => {
        res.send({status: 500, message: "Error", data: err});
    })
});
router.delete('/deleteUserById/:id', (req, res) => {
    userService.deleteUser(req.params.id)
        .then(() => res.send({status: 200, message: "Usuario eliminado"}))
        .catch(err => res.send({
        status: 500,
        message: "Error",
        data: err
    }))
});
module.exports = router;
