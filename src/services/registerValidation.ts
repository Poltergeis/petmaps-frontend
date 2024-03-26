export const registerValidation = async(values:string[]) => {
    if(values.includes('')) return false;
    const email = values[0];
    const password = values[1];
    const confirmPassword = values[2];
    if(password !== confirmPassword) return false;

    const result = await request(email,password,confirmPassword);
    if(!result) return false;
    if(result === 'false') return false;
    return result.result;
}

const request = async(email:string,password:string,confirmPassword:string) => {
    try{
        const response = await fetch('http://localhost:9000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        if(!response.ok) return 'false';
        return response.json();   
    }catch(error){
        console.log(error);
        return 'false';
    }
}