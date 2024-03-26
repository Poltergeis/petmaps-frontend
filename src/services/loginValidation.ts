export default async function validateLogin(values:string[]){
    const email = values[0];
    const password = values[1];
    const result = await request(email,password);
    if(!result) return false;
    if(result === 'false') return false;
    return result.loginAllowed;
}

async function request(email:string,password:string){
    try{
        const response = await fetch(`http://localhost:9000/user/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        if(!response || !response.ok) return 'false'
        return response.json();
    }catch(error){
        console.log(error);
        return 'false';
    }
}