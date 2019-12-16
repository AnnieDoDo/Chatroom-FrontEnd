
export const LoginRegService = {
    login,
    logout,
    register,
};

function login(accountdata,password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata,password}),
        mode: 'cors',
        credentials: 'include',
    }
    
    return fetch('http://localhost:4500/login',requestEntity)
    .then(handleResponse)
    .then(user =>{
        console.log(user)
        if(user)
        {
            localStorage.setItem('user',accountdata);
        }else{
            user = ''
        }
        return user;
    })
}

function logout() {
    const requestEntity = {
        method :'GET',
        mode: 'cors',
        credentials: 'include',
    }

    return fetch('http://localhost:4500/logout',requestEntity)
    .then(handleReg =>{
        console.log(handleReg)
        if(handleReg.text()=="logoutOK")
        {
            localStorage.removeItem('user');
            return handleReg.text()
        }
    })
}

function handleResponse(response){
    return response.text()
    .then(text => {
        console.log(text)
        if( (text=='Invalid password') || (text=='Unauthorized!') ){
            const error = String(text);
            return text;
        }else if(text=='logSubOK'){
            const islogin = String(text);
            return 'logSubOK';
        }
    });
}

function register(accountdata, password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata,password}),
        mode: 'cors'
    }

    return fetch('http://localhost:4500/register',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })

}