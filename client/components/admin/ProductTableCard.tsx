import { FC } from "react";
import Image from 'next/image'
import { useActions } from "../../hooks/actions";
import { useTypedSelector } from "../../hooks/typesSelector";
import ProductModal from "./ProductModal";
import axios from "axios";


interface Props {
    product: any[]
}
const ProductTableCard: FC<Props> = ({ product }) => {
    const { changeModal, fetchProduct } = useActions()
    const { modal } = useTypedSelector(state => state.modal)
    const deleteProuct = async () => {
        await axios.delete(`http://localhost:8000/api/v1/product/${product.id}`)
        fetchProduct(null, null, null)
    }
    return (
        <>
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.type}</td>
                <td>{product.brand}</td>
                <td>{String(product.hot)}</td>
                <td>{product.size}</td>
                <td>{product.model}</td>
                <div className="action">
                    <Image src="/edit.png" alt="" width={15} height={15} onClick={() => changeModal(true)} />
                    <Image src="/trash_icon.svg" width={15} height={15} onClick={() => deleteProuct()} />
                </div>
            </tr>
            {modal == false ? null : <ProductModal product={product} />}
        </>
    );
};

export default ProductTableCard;