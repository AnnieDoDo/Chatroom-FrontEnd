export const ManagerService = {
    Create,
    Read,
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