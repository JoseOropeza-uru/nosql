let UserModel = require('../models/user');

const createUser = async (user) => {
    let userToInsert = new UserModel(user);
    return await userToInsert.save(function (err, user) {
        if (err) return console.error(err);
        console.log(user);
    });
};

const getUsers = async () => {
    return await UserModel.find((err, users) => {
        if (err)
            return console.error(err);
        console.log(users)
    });
};

const getUserById = async (id) => {
    return await UserModel.findById(id, (err, users) => {
        if (err)
            return console.error(err);
        console.log(users)
    });
};
const updateUser = async (id, user) => {
    console.log(('update' + id))
    return await UserModel.findByIdAndUpdate(id, {$set: user}, (err, user) => {
        if (err) return console.error(err)
        console.log(user)
        console.log('updated')
    });
};
const deleteUser = async (id) => {
    console.log(('delete' + id));
    return await UserModel.findByIdAndRemove(id, (err) => {
        if (err) return console.error(err);
        console.log('deleted')
    });
};

const userService = {createUser, getUserById, getUsers, updateUser, deleteUser};
module.exports = userService;