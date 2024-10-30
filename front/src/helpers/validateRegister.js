export const validateRegister = (form) => {
    const errors = {};
  
    const regExp = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Formato de email
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])/,
    };
    
  
    if (form.email && !regExp.email.test(form.email)) {
      errors.email = "El email debe tener un formato válido. Ejemplo:'nombre@dominio.com'";
    }
  
    if (form.password && !regExp.password.test(form.password)) {
      errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial como @$!%*?&";
    }
    
    return errors;
  };