const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData) {
    
    const requiredFields = ['email', 'password'];
    for (const field of requiredFields) {
        if (!userData[field]) {
            throw new Error(`El campo ${field} es obligatorio`);
        }
    }

    try {
        const res = await fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (res.ok) {
            if (res.token) {
                localStorage.setItem('token', res.token); // Guardar el token en localStorage
            }
            return res.json();
            
        }     
    } catch (error) {
        throw new Error(error);  
    }
}


export async function login(userData) {
    try {
        // Ensure you are using the environment variable
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${API_URL}/auth/login`, {
            method: POST,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if(res.ok) {
            return res.json();
        } else {
            throw new Error("Fallo el inicio de sesion");
        }
    } catch (error) {
        throw new Error(error);
}
}