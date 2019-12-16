export const ManagerService = {
    Create,
    Read,
    Delete,
    Update,
};

function Create(accountdata,password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata,password}),
        mode: 'cors'
    }

    return fetch('http://localhost:4500/create',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })
}


function Read(){
    const requestEntity = {
        method :'GET',
        mode: 'cors'
    }

    return fetch('http://localhost:4500/read',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })
}

function Delete(accountdata){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata}),
        mode: 'cors'
    }

    return fetch('http://localhost:4500/delete',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })
}

function Update(accountdata,password,admin){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata,password,admin}),
        mode: 'cors'
    }

    return fetch('http://localhost:4500/update',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })
}