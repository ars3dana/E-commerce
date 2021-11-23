import { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useActions } from '../../hooks/actions';
import styles from '../../styles/auth/Auth.module.scss'

const registration: NextPage = () => {
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
    }
    console.log(userData)
    const redirect = () => {
        fetchUser(false, userData, 'registration')
        router.push('/')
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.inp_block}>
                    <input name="email" placeholder="Email" type="text" onChange={handleInp} />
                </div>
                <div className={styles.error}>

                </div>
                <div className={styles.inp_block}>
                    <input name="password" placeholder="Пароль" type="password" onChange={handleInp} />
                </div>
                <button onClick={redirect}>Зарегистрироваться</button>
                <div className={styles.redirect}>
                    Уже есть аккаунт ?     <Link href='/auth/login'><a>Войти</a></Link>

                </div>
            </div>
        </div>
    );
};

export default registration;