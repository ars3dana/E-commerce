import axios from 'axios';
import styles from '../../styles/cart/Cart.module.scss'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/typesSelector'
import { useActions } from '../../hooks/actions'
import { Product } from '../../types/product';
interface Props {
    product: Product
}

const CartCard: FC<Props> = ({ product }) => {
    const { cart } = useTypedSelector(state => state.cart)
    const { fetchCart } = useActions()
    const [count, setCount] = useState(product.cart.count)
    const { upTotal, downTotal } = useActions()
    const updateCount = async () => {
        let obj = {
            count: count
        }
        await axios.patch(`http://localhost:8000/api/v1/cart/${product.cart.id}`, obj)
    }
    useEffect(() => {
        updateCount()
    }, [count])

    const incrementCount = () => {
        setCount(count + 1)
        upTotal(product.price)
    }
    const decrementCount = () => {
        setCount(count - 1)
        downTotal(product.price)
    }
    const deleteCart = async () => {
        await axios.delete(`http://localhost:8000/api/v1/cart/${product.cart.id}`)
        fetchCart(product.cart.userId)
    }
    return (
        <div className={styles.product__container}>
            <div className={styles.img}>
                <img src={product.img} alt="" />
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.count}>
                {count > 1 ? <div onClick={() => decrementCount()} className={styles.action}>
                    -
                </div> : null}

                {count}
                <div onClick={() => incrementCount()} className={styles.action}> +</div>
            </div>
            <div className={styles.product__total_price}>
                {product.price * count} $
            </div>
            <div onClick={() => deleteCart()} className={styles.trash}>
                <Image className={styles.delete} src="/trash_icon.svg" width={20} height={20} />
            </div>
        </div>
    );
};

export default CartCard;