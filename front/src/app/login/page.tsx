'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/helpers/auth.helper';
import styles from './Login.module.css';

const Login = () => {
    const router = useRouter();
    const initialState = {
        email: '',
        password: ''
    };

    const [dataUser, setDataUser] = useState(initialState);
    const [error, setError] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await login(dataUser);
            alert("Inicio de sesión exitoso");
            console.log("res", response);
            router.push("/dashboard");
        } catch (error) {
            setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu email✉"
                    value={dataUser.email}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingresa tu contraseña🔑"
                    value={dataUser.password}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button type="submit" className={styles.submitButton}>
                Iniciar Sesión
            </button>
        </form>
    );
};

export default Login;
