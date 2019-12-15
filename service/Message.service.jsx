export const MessageService = {
    storeMessage
};

function storeMessage(accountdata,text){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({accountdata,text}),
        mode: 'cors'
    }

    return fetch('http://fcard.luishsu.me/message',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })
}