import axios from "axios";
import { FC, useState } from "react";
import { useActions } from "../../hooks/actions";

import styles from '../../styles/admin/Modal.module.scss'

interface Props {
    product: object
}

const ProductModal: FC<Props> = ({ product }) => {
    const { changeModal, fetchProduct } = useActions()

    const [data, setData] = useState({
        title: '',
        img: '',
        description: '',
        model: '',
        size: '',
        type: '',
        brand: '',
        price: 0,
        hot: false
    })

    const handleInp = (e) => {
        if (e.target.name == 'price') {
            let obj = {
                ...data,
                [e.target.name]: Number(e.target.value)
            }
            setData(obj)
        }
        let obj = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(obj)
    }
    const addProduct = async () => {
        await axios.post(`http://localhost:8000/api/v1/product/create`, data)
        changeModal(false)
        fetchProduct(null, null, null)
    }
    const patchProduct = async () => {
        await axios.patch(`http://localhost:8000/api/v1/product/${product.id}`, data)
        changeModal(false)
        fetchProduct(null, null, null)
    }

    return (
        <div className={styles.container}>
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Название" name="title" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Описание" name="description" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Картинка" name="img" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Тип" name="type" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Бренд" name="brand" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Модель" name="model" />
            <input type="text" onChange={(e) => handleInp(e)} placeholder="Размер" name="size" />
            <select onChange={(e) => handleInp(e)} name="hot">
                <option value="true">Топ</option>
                <option value="false">Обычный</option>
            </select>
            <button onClick={() => addProduct()}>Создать</button>
            <button onClick={() => patchProduct()}>Изменить</button>
            <button onClick={() => changeModal(false)}>Закрыть</button>

        </div >
    );
};

export default ProductModal;