import {useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [user, setUser] = useState({
        username: "Mario"
    });
    const onChangeUsername = (e) => {
        setUser({
            username: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
    }

    return ( 
         <div>
            <p>User: {user.username}</p>
            <form onSubmit={onSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                    value={user.username}
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700"
                    type="text"
                    id="username"
                    onChange={onChangeUsername}
                    name="username"
                    />
                    <input
                     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                     type="submit"
                     value="Save"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default CreateUser;