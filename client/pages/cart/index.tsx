import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CartCard from '../../components/cart/CartCard';
import { useActions } from '../../hooks/actions';
import { useTypedSelector } from '../../hooks/typesSelector';
import styles from '../../styles/cart/Cart.module.scss';

const Cart: NextPage = () => {
    const { cart } = useTypedSelector(state => state.cart)
    const { user, loading, error } = useTypedSelector(state => state.user)
    const { fetchCart, fetchTotal } = useActions()
    const { totalPrice } = useTypedSelector(state => state.total)
    const countTotal = async () => {
        let sum = 0
        await cart.forEach(product =>
            sum += product.price * product.cart.count
        )
        console.log(sum)
        fetchTotal(sum)
    }

    useEffect(() => {
        if (user) {
            fetchCart(user?.id)
        }
    }, [user])
    useEffect(() => {
        return () => {
            fetchCart(user?.id)
        }
    }, [])
    useEffect(() => {
        if (cart) {
            countTotal()
        }
    }, [cart])
    if (!user) {
        return (
            <h1>Вы не авторизованы, Зарегистрируйтесь чтобы доавить вашу первую покупку</h1>
        )
    }
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (loading) {
        return (
            <h1>Загрузка Товаров</h1>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.cart__container}>
                <div className={styles.cart__header}>
                    <h3>Корзина</h3>
                </div>
                {cart.map((product, index) => (
                    <CartCard key={index} product={product} />
                ))}
            </div>
            <div className={styles.sidebar}>
                <div className={styles.total__price}>
                    <h3>Итого</h3>
                    <div className={styles.price}>
                        {totalPrice} $
                    </div>
                </div>
                <div className={styles.total__product}>
                    <p>Товары ,{cart.length}шт</p>
                </div>
                <button>ЗАКАЗАТЬ</button>
            </div>
        </div>
    );
};

export default Cart;