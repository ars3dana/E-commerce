import { NextPage } from "next";
import Image from 'next/image';
import { useEffect, useState } from "react";
import UserTableCard from "../../components/admin/UserTableCard";
import ProductTableCard from "../../components/admin/ProductTableCard";
import { useActions } from "../../hooks/actions";
import { useTypedSelector } from "../../hooks/typesSelector";
import styles from '../../styles/admin/Admin.module.scss';

const Admin: NextPage = () => {
    const { user } = useTypedSelector(state => state.user)
    const [users, setUsers] = useState([])
    const { products } = useTypedSelector(state => state.product)
    const { fetchAllUser, fetchProduct } = useActions()
    const [page, setPage] = useState('user')
    useEffect(() => {
        fetchAllUser()
        fetchProduct(null, null, null)
        setUsers(user)
    }, [])

    return (
        <>
            <div className={styles.sidebar_container}>
                <div onClick={() => setPage('user')} className={styles.sidebar_item}>
                    <Image className={styles.img} src="/user.png" alt="" width={40} height={40} />
                    Пользователи
                </div>
                <div onClick={() => setPage('product')} className={styles.sidebar_item}>
                    <Image src="/product.png" alt="" width={40} height={40} />
                    Товары
                </div>
            </div>

            {(page == 'user') ?
                (
                    <div className={styles.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>email</th>
                                    <th>password</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users && users.map((user, index) => (
                                    <UserTableCard key={index} user={user} />
                                ))}
                            </tbody>

                        </table>
                    </div>

                )
                :
                (
                    <div className={styles.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>type</th>
                                    <th>brand</th>
                                    <th>hot</th>
                                    <th>size</th>
                                    <th>model</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product, index) => (
                                    <ProductTableCard key={index} product={product} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </>
    )
}

export default Admin;