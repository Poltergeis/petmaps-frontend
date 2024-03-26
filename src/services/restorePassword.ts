export const restorePassword = async(values:string[]) => {
    if(!values || values.includes('')) return false;
    const email = values[0];
    const password = values[1];
    const result = await request(email,password);
    if(!result) return false;
    return result.result;
}

const request = async(email:string,password:string) => {
    try{
        const response = await fetch('http://localhost:9000/users/updateProfile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        if(!response.ok) return 'false'
        return response.json();
    }catch(error){
        console.log(error);
        return 'false';
    }
}