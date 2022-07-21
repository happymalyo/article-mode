import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const CreateClient = () => {
    const classStyle = {
        label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        select: "block appearance-none w-full bg-gray-200 border  border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        input:`text-sm text-gray-base w-full
        mr-3 py-5 px-4 h-3 focus:outline-none border-b-2 border-gray-200
        border-gray-200 mb-2`,
        selectIcon: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    };

    const [newClient, setNewClient] = useState(
        {
            nom: "",
            prenom: "",
            adresse: "",
            ville: "",
            telephone: ""
        }
    );

    const history = useHistory();

    const handleChange = (e) => {
        setNewClient({...newClient,[e.target.name] : e.target.value}) //Object.assign(target,data)
    }



    //Sending data
    const axiosProvider = require("axios").create({
        timeout: 120000, // 2 min
        baseURL:'http://localhost:5000'
    });

    const sendClient = async (params) => {
        const result =  await axiosProvider({
            method: "POST",
            url: "/clients/add",
            data: params,
        });
        return result;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendClient(newClient)
        history.push('/clients/list');
    }
    return(
        <div className="client">
            <div class="flex flex-col
					items-center">
                <p class="text-indigo-500 text-xl uppercase tracking-wider mb-3 mt-5">
                Ajout de nouveau Client
                <hr/>
                </p>
                <p class="text-warning-500 uppercase">{newClient.nom}</p>
                <form onSubmit={handleSubmit} className="shadow-xl px-5 py-5 w-2/4 sm:w-3/4">
                    
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="nom">
                        Nom
                        </label>
                        <input aria-label="Enter name"
                        type="text" placeholder="Nom"
                        id="nom"
                        class={classStyle.input}
                        name="nom"
                        value={newClient.nom}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="prenom">
                        Prénom
                        </label>
                        <input aria-label="Enter firstname"
                        type="text" placeholder="prenom"
                        id="prenom"
                        class={classStyle.input}
                        name="prenom"
                        value={newClient.prenom}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="adresse">
                        Adresse
                        </label>
                        <input aria-label="Enter adresse"
                        type="text" placeholder="adresse"
                        id="adresse"
                        class={classStyle.input}
                        name="adresse"
                        value={newClient.adresse}
                        onChange={handleChange} 
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="ville">
                        Ville
                        </label>
                        <input aria-label="Enter ville"
                        type="text" placeholder="ville"
                        id="ville"
                        class={classStyle.input}
                        name="ville"
                        value={newClient.ville}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="telephone">
                        Téléphone
                        </label>
                        <input aria-label="Enter telephone"
                        type="text" placeholder="telephone"
                        id="telephone"
                        class={classStyle.input}
                        name="telephone"
                        value={newClient.telephone}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    
                    <button type="submit"
                    class="bg-indigo-400 py-2 rounded-bl-lg w-full mt-4">
                    Enregistrer
                    </button>
                </form>
                </div>
        </div>
    )
}

export default CreateClient;