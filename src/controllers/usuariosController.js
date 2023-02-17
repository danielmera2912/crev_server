const usersService = require("../services/usuariosServices");

const checkRegisterName = ((req, res, next) => {
    const name = req.params.name
    if(!name){
        res.status(400).end();
    }
    else{
        res.send(usersService.checkRegisterName(name));
    }
})

const checkRegisterEmail = ((req, res, next) => {
    const email = req.params.email
    if(!email){
        res.status(400).end();
    }
    else{
        res.send(usersService.checkRegisterEmail(email));
    }
})
const getAllUsers = ((req, res, next) => {
    
    const allUsers = usersService.getAllUsers();
    if (allUsers) {
        res.send(allUsers)
    } else {
        res.status(404).end()
    }
})

const createOneUser = ((req, res, next) => {
    const { body } = req
    if (!body.name || !body.email || !body.password || !body.fecha_nacimiento) {
        res.status(400).end()
    } else {
        const newUser = {
            "name": body.name,
            "email": body.email,
            "password": body.password,
            "fecha_nacimiento": body.fecha_nacimiento,
            "avatar": body.avatar
        }
        const createdUser = usersService.createOneUser(newUser);
        if (createdUser) res.status(200).send(createdUser);
        else res.status(406).end();
    }

    res.end()
})

const getOneUser = ((req, res, next) => {
    let user = req.params.user
    const oneUser = usersService.getOneUser(user)
    if (oneUser) {
        res.send(oneUser)
    } else {
        res.status(404).end()
    }
})

const getOneUserEmail = ((req, res, next) => {
    const email = req.params.email
    if(!email){
        res.status(400).end();
    }
    else{
        res.send(usersService.getOneUserEmail(email));
    }
})
const updateOneUser = ((req, res, next) => {
    let nuevoUser = req.body;
    const userUpdate = usersService.updateOneUser(nuevoUser)
    if (!userUpdate) {
        res.status(400).send({ mensaje: "El user no ha sido actualizado" }).end();
        res.locals.mensaje = "ERROR";
    } else {
        res.send(userUpdate).end();
        res.locals.mensaje = "OK";
    }
})


const deleteOneUser = (req, res, next) => {
    let { user } = req.params;

    const userEliminado = usersService.deleteOneUser(user);

    if (!userEliminado) {
        res.status(400).send({ mensaje: "El user no ha sido eliminado" }).end();
        res.locals.mensaje = "ERROR";
    } else {
        res.send(userEliminado).end();
        res.locals.mensaje = "OK";
    }
    next();
};

module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser,
    checkRegisterEmail,
    checkRegisterName,
    getOneUserEmail
}