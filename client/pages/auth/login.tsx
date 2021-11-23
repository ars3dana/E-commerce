import Link from 'next/link'
import styles from '../../styles/auth/Auth.module.scss'
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useActions } from '../../hooks/actions';
import { NextPage } from 'next';
const login: NextPage = () => {
    const router = useRouter()
    const { fetchUser } = useActions()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const handleInp = (e) => {
        let data = {
            ...userData,
            [e.target.name]: e.target.value
        }
        setUserData(data)
    };
    const redirect = () => {
        fetchUser(false, userData, 'login')
        router.push('/')
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.inp_block}>
                    <input name="email" onChange={handleInp} placeholder="Email" type="text" />
                    <div className={styles.error}>

                    </div>
                </div>
                <div className={styles.inp_block}>
                    <input name="password" onChange={handleInp} placeholder="Пароль" type="password" />
                </div>
                <button onClick={redirect}>Войти</button>
                <div className={styles.redirect}>
                    Впервые у нас ?   <Link href="/auth/registration"><a>Регистрация</a></Link>
                </div>
            </div>
        </div>
    );
};

export default login;