import React, { useState } from "react";
import Title from "../../components/Login/Title/Title";
import Label from "../../components/Login/Label/Label";
import Input from "../../components/Login/Input/Input";
import "./Login.css";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
        }

    };

    function ifMatch(param){
        if(param.user > 0 && param.password > 0){
            if(param.user ==="SalySalsa" && param.password ==="123456"){
                const { user, password } = param;
                let ac = { user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem("account",account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        } else {
            setIsLogin(false);
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account);
            console.log("account:" , account);
        }
    };

    return (

        <section className="containerP" 
        style={{ marginTop: "72px", paddingBottom: "42px", paddingTop: "42px" }}>
            <div className="contact-wrapper animated boun ceInUP">
                <Title text='Iniciar sesión' />
                <Label text='Usuario' />
                <Input
                    attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',

                    }}
                    handleChange={handleChange}
                />
                <Label text='Contraseña' />
                <Input
                    attribute={{
                        id: 'contraseña',
                        name: 'contraseña',
                        type: 'password',

                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                {passwordError &&
                    <label className='label-error'>La constraseña debe tener mas de 6 digitos</label>}
                <div className='ingresarButton'>
                    <button className='btn' onClick={handleSubmit}>
                        Ingresar
                    </button>
                </div>

            </div>
        </section> 
    );
};

export default Login;