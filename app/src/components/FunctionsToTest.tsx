import CryptoJS from 'crypto-js';

export function getUsername(username:String){
    console.log(username)
    if(username !==undefined  && username !==""&& username.length<10 && username.search("@")===-1){
        return username;
    }
    else{
        return null
    }
}
export function getPassword(password:String){
    var regex=/^[A-Za-z0-9]\w{8,}$/;
    console.log(regex.exec(String(password)))
    if(password ===undefined || password ==="" ||regex.exec(String(password))=== null){
        return null
    }
    
    return password;
    
}
export function getAll(username:String,password:String){
    
    if(getPassword(password)&& getUsername(username)){
        return true
    }
    return false;
        
}
export function getAllByThrowingError(username:String,password:String){
    
    if(!getPassword(password)|| !getUsername(username)){
        throw new Error ('Invalid password or usernarme')
    }
        
}
export function generateTokenPromise(password:String){
    const promise=new Promise((resolve,reject)=>{
        let hash = CryptoJS.MD5(String(password)).toString(); 
        console.log("hash",hash,password)
        console.log(hash)// create MD5 hash
            if(hash){
                resolve(hash)
            }
            else{
                reject(null)
            }
       
    })
    return promise;
}
export function testFunction(logger:Function,password:String){
    let data="hello world"
    logger(data)
    generateTokenPromise(password)
}




