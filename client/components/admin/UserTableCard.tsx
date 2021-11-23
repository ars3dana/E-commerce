import { FC, useState } from "react";
import Image from 'next/image'
import { useActions } from "../../hooks/actions";
import axios from "axios";
import UserModal from "./UserModal";
import { useTypedSelector } from "../../hooks/typesSelector";
interface User {
    id: string;
    email: string;
    password: string
}
interface Props {
    user: []
}
const UserTableCard: FC<Props> = ({ user }) => {
    const { fetchAllUser, changeModal } = useActions()
    const { modal } = useTypedSelector(state => state.modal)
    const deleteUser = async () => {
        await axios.delete(`http://localhost:8000/api/v1/user/${user.id}`)
        fetchAllUser()
    }
    function modalC(e) {
        alert('arse')
        changeModal(e)
    }
    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}

                </td>
                <div className="action">
                    <Image src="/edit.png" alt="" width={15} height={15} onClick={() => modalC(true)} />
                    <Image src="/trash_icon.svg" width={15} height={15} onClick={() => deleteUser()} />
                </div>
            </tr>
            {!modal ? null : <UserModal user={user} />}
        </>
    );
};

export default UserTableCard;