import axios from 'axios';
import React, { FC, useState } from 'react';
import { useActions } from '../../hooks/actions';
import styles from '../../styles/admin/Modal.module.scss'
interface Props {
    user: []
}
const UserModal: FC<Props> = ({ user }) => {

    const { changeModal } = useActions()
    const { fetchAllUser } = useActions()
    const [type, setType] = useState('')
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleInp = (e) => {
        let obj = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(obj)
    }

    const addUser = async () => {
        await axios.post('http://localhost:8000/api/v1/registration', data)
        fetchAllUser()
        changeModal(false)
    }
    const pathUser = async () => {
        await axios.patch(`http://localhost:8000/api/v1/user${user.id}`, data)
        fetchAllUser()
        changeModal(false)
    }
    return (
        <div className={styles.container}>
            <input type="text" name="email" onChange={(e) => handleInp(e)} />
            <input type="text" name="password" onChange={(e) => handleInp(e)} />
            <button onClick={() => { type == 'add' ? addUser() : pathUser() }} >Готово</button>
            <button onClick={() => changeModal(false)}>Закрыть</button>
        </div>
    );
};

export default UserModal;