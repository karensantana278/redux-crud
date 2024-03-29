import { FormEvent, useState } from "react"
import { addUser } from "../store/reducers/UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../types/User"
import { useNavigate } from 'react-router-dom';

function Create(){

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')

    const users = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextId = Math.max(...users.map(user => user.id), 0) + 1;

        dispatch(addUser({id: nextId, name: name, email: email}))
        navigate('/')
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" onChange={event => setName(event.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <br />

                    <button className="btn btn-info">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Create