import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/products/ProductDetail.module.scss'
import { useTypedSelector } from '../../hooks/typesSelector';
import { NextPage } from 'next';
import { User } from '../../types/user';

interface Product {
    description: string
    hot: boolean
    img: string;
    title: string
    type: string
    brand: string
    price: number
    size: string | null
    model: string | null
}

interface UserI {
    user: User
}
interface Body {
    userId: User
    productId: string
    count: number
}
const ProductDetail: NextPage = () => {
    const { user } = useTypedSelector(state => state.user)
    const router = useRouter()
    const { id } = router.query

    const [product, setProduct] = useState<Product>()
    const [error, setError] = useState(false)
    const fetchDetail = async () => {
        if (id) {
            const { data } = await axios.get<Product>(`http://localhost:8000/api/v1/product/${id}`)
            setProduct(data)
        }
    }
    useEffect(() => {
        console.log("asd")
        setTimeout(() => {
            setError(false)
        }, 2200)
    }, [error])
    console.log(error)
    const addCart = async () => {
        if (!user) {
            return router.push('/auth/registration')
        }
        let body: Body = {
            userId: user.id,
            productId: id,
            count: 1
        }
        try {
            await axios.post(`http://localhost:8000/api/v1/cart/add`, body)

        } catch (e) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [id])
    if (!product) {
        return (
            <h1>Подождите!</h1>
        )
    }
    return (
        <div>
            {error ? (
                <div className={styles.error}>
                    Этот товар у вас уже в Корзине
                </div>
            ) : (null)}
            <div className={styles.container}>
                <h1>{product.title}</h1>
                <div className={styles.media}>
                    <div className={styles.media__left}>
                        <div className={styles.media__left_img}>
                            <img src={product.img} width={400} height={400} />
                        </div>
                        {/* <div className={styles.rating}>
                            <Rating />
                        </div> */}
                    </div>
                    <div className={styles.media__right}>
                        <div className={styles.price}>
                            {product.price} $
                        </div>
                        <div className={styles.cart}>
                            <button onClick={() => addCart()}>ДОБАВИТЬ В КОРЗИНУ</button>
                            {/* {like ? (
                                <Image onClick={() => setLike(!like)} src={likeSvg} width="50" height="50" />
                            ) : (
                                <Image onClick={() => setLike(!like)} src={likeToggle} width="50" height="50" />
                            )
                            } */}
                        </div>
                        <div className={styles.brand}>
                            {/* <img src={brand.img}/> */}
                        </div> `
                        <div className={styles.description}>
                            <h2>Описание</h2>
                            {product.description}
                            <p>Тип.............................<span>{product.type}</span></p>
                            <p>Бренд.........................<span>{product.brand}</span></p>
                            {product.type == 'electronic' ? <p>Модель......................<span>{product.model}</span></p> : null}
                            {product.type == 'clothe' ? <p>Размер......................<span>{product.size}</span></p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetail;
