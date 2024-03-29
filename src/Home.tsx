import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Data'; 
import { Link } from 'react-router-dom';
import { deleteUser } from "./UserReducer";

function Home() {
    const users = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
    }
    
    return (
        <div className="container">
            <h2>Crud react</h2>
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
                    {users.map(user => (
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
