import { useParams } from "react-router-dom";
import { RootState } from '../data/Data'; 
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { updateUser } from "../store/reducers/UserReducer";


function Update(){

    const {id} = useParams();
    const users = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const existingUser = users.filter(user => user.id === +id!);
    const {name, email} = existingUser[0];

    const [newName, setNewName ] = useState(name)
    const [newEmail, setNewEmail ] = useState(email)

    const handleUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateUser({id: +id!, name: newName, email: newEmail}))
        navigate('/')
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <h3>Edit User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={newName}  onChange={event => setNewName(event.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" value={newEmail} onChange={event => setNewEmail(event.target.value)}/>
                    </div>
                    <br />

                    <button className="btn btn-info">Update</button>

                </form>
            </div>
        </div>
    )
}

export default Update


