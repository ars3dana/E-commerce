import styles from '../../styles/products/ProductCard.module.scss'
import { Product } from '../../types/product';
import Link from 'next/link'
import { FC, } from 'react'
interface ProductProps {
    id: string;
    img: string;
    price: number;
    type: string;
    title: string;
    brand: string;
    description: string
}
interface Props {
    product: ProductProps
}
const ProductCard: FC<Props> = ({ product }) => {

    return (
        <>
            <Link href={`/catalog/${product.id}`}>
                <div className={styles.container}>
                    <div className={styles.img}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={styles.body}>
                        <p className={styles.price}>{product.price} $</p>
                        <p className={styles.type}>{product.type}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductCard;