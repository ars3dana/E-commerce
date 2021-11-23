import styles from '../../styles/navigation/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useTypedSelector } from '../../hooks/typesSelector';
import { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useRouter } from 'next/dist/client/router';
import MediaQuery from 'react-responsive'
import Menu from './Menu';
interface User {
    email: string
}
interface UserProps {
    user: User
}
const Navbar: FC<UserProps> = () => {
    const router = useRouter()
    const { fetchUser, fetchProduct } = useActions()
    const { user, error, loading } = useTypedSelector(state => state.user)
    const [serachQuery, setSearchQuery] = useState('')
    const [value, setValue] = useState('')
    const [menuActiv, setMenuActiv] = useState(false)
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        setValue(e.target.value)
    }
    const search = async (e) => {
        if (e.key == 'Enter') {
            router.push(`/catalog/search/${serachQuery}`)
            setValue('')
        }
    }
    const toggleEffect = () => {
        if (menuActiv) {
            setMenuActiv(false)
        }
        if (!menuActiv) {
            setMenuActiv(true)
        }
    }
    useEffect(() => {
        fetchUser(null, null, null)
    }, [])

    return (
        <div className={styles.container}>
            <Menu activ={menuActiv} out={fetchUser} user={user} set={setMenuActiv} />
            <MediaQuery minDeviceWidth={600}>
                <Link href="/">
                    <div className={styles.main_logo}>
                        Popular
                    </div>
                </Link>
            </MediaQuery>
            <div className={styles.search}>
                <Image src="/search-icon.svg" width={40} height={40} />
                <input onKeyDown={(e) => search(e)} value={value} onChange={(e) => handleSearch(e)} className={styles.search_input} type="text" />
            </div>
            <MediaQuery minDeviceWidth={1000}>
                <>
                    <div className={styles.navbar_items}>
                        <Link href="/">
                            <div className={styles.item}>Главная</div>

                        </Link>
                        <Link href={`/cart`}>
                            <div className={styles.item}>Корзина</div>

                        </Link>
                        <Link href="/catalog">
                            <div className={styles.item}>Категории</div>
                        </Link>
                    </div>


                    {(!user) ? (
                        <div className={styles.navbar_auth}>
                            <Link href="/auth/registration">
                                <button className={styles.signup}>
                                    Регистрация
                                </button>
                            </Link>
                            <Link href="/auth/login">
                                <button className={styles.signin}>Войти</button>
                            </Link>
                        </div>

                    ) : (
                        <>
                            {user.email}
                            <div onClick={() => fetchUser(true, null, null)}>
                                Выход
                            </div>
                        </>
                    )}

                </>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1000}>
                <div onClick={() => toggleEffect()} className={!menuActiv ? (styles.menu_btn) : (styles.menu_btn_open)}>
                    <div className={!menuActiv ? (styles.menu_btn_burger) : (styles.menu_btn_burger_open)}></div>
                </div>
            </MediaQuery>

        </div>
    );
};

export default Navbar;