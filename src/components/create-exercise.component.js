import {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
    const [exercise, setExercise] = useState({
        username: "Mario",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    });

    const onChangeUsername = (e) => {
        setExercise({
            username: e.target.value
        });
    }
    const onChangeDescription = (e) => {
        setExercise({
            description: e.target.value
        });
    }
    const onChangeDuration = (e) => {
        setExercise({
            duration: e.target.value
        });
    }
    const onChangeDate = (date) => {
        setExercise({
            date: date
        });
    }

   const onSubmit = (e) => {
        e.preventDefault();
        console.log(exercise);
    }

    return ( 
        <div>
            <p>User: {exercise.username}</p>
            <form onSubmit={onSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                    value={exercise.username}
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700"
                    type="text"
                    id="username"
                    onChange={onChangeUsername}
                    name="username"
                    />
                    
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                        Desription
                    </label>
                    <input
                    value={exercise.description}
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700"
                    type="text"
                    id="description"
                    onChange={onChangeDescription}
                    name="description"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
                        Duration
                    </label>
                    <input
                    value={exercise.duration}
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700"
                    type="text"
                    id="duration"
                    onChange={onChangeDuration}
                    name="duration"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                        Date
                    </label>
                    <DatePicker
                        selected={exercise.date}
                        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700"
                        onChange={onChangeDate}
                        id="date"
                    />
                </div>
                <input
                     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" 
                     type="submit"
                     value="Valider"
                />
            </form>
        </div>
     );
}
 
export default CreateExercise;