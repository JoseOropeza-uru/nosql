function $$(id) {
    return document.getElementById(id);
}

function getUsers() {
    fetch('./mongoTest/users/getUsers')
        .then(res => res.json()).then(data => console.log(data))
}

function getUserById() {
    let userId = $$('userId').value;
    if (userId.trim()!== ''&&userId.trim().match(/^[0-9a-fA-F]{24}$/)) {
        fetch(`./mongoTest/users/getUserById/${userId.trim()}`)
            .then(res => res.json()).then(data => console.log(data))
    }else{
        alert('id invalido');
    }
}

function createUser() {
    let user={
        name:$$('name').value,
        username:$$('username').value,
        password:$$('password').value,
        age:$$('age').value
    };
    if (user.username.trim()!==''&&user.password.trim()!==''){
        fetch(`./mongoTest/users/createUser`,{body:JSON.stringify(user),method:'POST',headers:{
                'Content-Type': 'application/json'
            }})
            .then(res => res.json()).then(data => console.log(data));
    } else{
        alert('Complete los campos necesarios Usuario y contraseña')
    }
}

function updateUser() {
    let userId = $$('userId').value;
    let user={
        name:$$('name').value,
        username:$$('username').value,
        password:$$('password').value,
        age:$$('age').value
    };
    if (user.username.trim()!==''&&user.password.trim()!==''&&userId.trim()!==''&&userId.trim().match(/^[0-9a-fA-F]{24}$/)){
        fetch(`./mongoTest/users/updateUserById/${userId}`,{body:JSON.stringify(user),method:'PUT',headers:{
                'Content-Type': 'application/json'
            }})
            .then(res => res.json()).then(data => console.log(data))
    } else{
        alert('Complete los campos necesarios Usuario y contraseña y compruebe el id enviado')
    }
}

function deleteUser() {
    let userId = $$('userId').value;
    if (userId.trim()!== ''&&userId.trim().match(/^[0-9a-fA-F]{24}$/)) {
        fetch(`./mongoTest/users/deleteUserById/${userId.trim()}`,{method:"DELETE"})
            .then(res => res.json()).then(data => console.log(data))
    }else{
        alert('id invalido');
    }
}

$$('getAll').addEventListener("click", getUsers);
$$('getById').addEventListener("click", getUserById);
$$('createUser').addEventListener("click", createUser);
$$('updateUser').addEventListener("click", updateUser);
$$('deleteUser').addEventListener("click", deleteUser);