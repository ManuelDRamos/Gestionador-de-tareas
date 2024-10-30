'use client';
import { useState, useEffect } from 'react';
import { validateRegister } from '@/helpers/validateRegister';
import { useRouter } from 'next/navigation';
import { register } from '@/helpers/auth.helper';
import styles from './Register.module.css';

const Register = () => {
    const router = useRouter();
    const initialState = {
        email: '',
        password: ''
     }

    const [dataUser, setDataUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        
        const validationErrors = validateRegister(dataUser);
        setErrors(validationErrors);
    
        
        if (Object.keys(validationErrors).length > 0) {
          return;
        }
    
        try {
          const newuser = await register(dataUser);
          alert("Te registraste correctamente");
          console.log ("res",newuser);
          router.push("/login");
        } catch (error) {
          alert("No pudimos registrarte");
          throw new Error(error);
        }
      };
      
      useEffect(() => {
        const errors = validateRegister(dataUser);
        setErrors(errors);
      }, [dataUser]);

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
                {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
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
                {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
            </div>

            {}
            <button type="submit" className={styles.submitButton}>
                Registrarse
            </button>
        </form>
    );
};

export default Register;
