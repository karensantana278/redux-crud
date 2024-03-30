import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/User'; 
import { Link } from 'react-router-dom';
import { deleteUser } from "../store/reducers/UserReducer";
import { useEffect, useState } from 'react';

function Home() {
    const users = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
    }

    const [search, setSearch ] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users)
    
    useEffect(() => {
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())));
    }, [users, search])
    
    return (
        <div className="container">
            <h2>Crud react</h2>

            <input className="form-control my-3" type="search" name="search" id="search" placeholder="Search a contact" onChange={event => setSearch(event.target.value)}/>

            <Link className="btn btn-success my-3" to="/create"> Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th> 
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className="btn btn-sm btn-primary">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
