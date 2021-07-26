import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';


const EditService = () => {
    const [newService, setNewService] = useState(
        {
        title:"",
        categorie: "",
        sous_categorie: "",
        image: "",
        description: "",
        site_web: "",
        phone: "",
        adresse: "",
        email: ""
        }
    );
    const [picture, setPicture] = useState('');
    const [service, setService] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const classStyle = {
        label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        select: "block appearance-none w-full bg-gray-200 border  border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        input:`text-sm text-gray-base w-full
        mr-3 py-5 px-4 h-3 focus:outline-none border-b-2 border-gray-200
        border-gray-200 mb-2`,
        selectIcon: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    };

    const axiosProvider = require("axios").create({
        timeout: 120000, // 2 min
        baseURL:'http://localhost:5000'
    });

    const datas = (data, arg = "application/json") => {
        if (arg === "application/json") {
            return JSON.stringify(data);
        } else if (arg === "multipart/form-data") {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
            });
            return formData;
        } else {
            return data;
        }
    };

    const sendService = async (params) => {
        const result =  await axiosProvider({
            method: "POST",
            url: "/services/add",
            data: datas(params, "multipart/form-data"),
            headers: { 'Access-Control-Allow-Origin': true } 
        });
        return result;
    }


    const handleChange = (e) => {
        setNewService({...newService, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewService({...newService, image: e.target.files[0]});
        setPicture(URL.createObjectURL(e.target.files[0]) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendService(newService)
        history.push('/services/dashboard');
    };

    
    axiosProvider({
        method: "GET",
        url: "/services/60fe6cd667db542568429e15",
        headers: { 'Access-Control-Allow-Origin': true }
    }).then((res) => {
        return res.json()
    }).then((data) => setService(data))
    
   
    


    return (
        <div className="create-service">
           <div class="flex flex-col
					items-center justify-center">
			<p class="text-indigo-500 text-xl uppercase tracking-wider mb-3">
			Ajout de nouvel service
			</p>

			<form onSubmit={handleSubmit} class="shadow-xl px-5 py-5" encType='multipart/form-data'>
                <div class="flex flex-wrap -mx-3 mb-6">
                <label class={classStyle.label} for="title">
                    Title
                    </label>
                    <input aria-label="Enter title"
                    type="text" placeholder="Title"
                    id="title"
                    class={classStyle.input}
                    name="title"
                    value={newService.title}
                    onChange={handleChange} 
                    
                    />
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class={classStyle.label} for="grid-state">
                        Categories
                        </label>
                        <div class="relative mb-2">
                            <select class={classStyle.select} id="grid-state"
                                name="categorie"
                                value={newService.categorie}
                                onChange={handleChange}
                            >
                                <option value="">selectionnez...</option>
                                <option value="education">Education</option>
                                <option value="home_service">Service Maison</option>
                                <option value="sport-loisir">Sports et Loisirs</option>
                            </select>
                            <div class={classStyle.selectIcon}>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class={classStyle.label} for="grid-state">
                        Sous-categorie
                        </label>
                        <div class="relative mb-2">
                            <select class={classStyle.select} id="grid-state"
                                name="sous_categorie"
                                value={newService.sous_categorie}
                                onChange={handleChange}
                                required
                            >
                                <option value="">selectionnez...</option>
                                <option value="universite" className="uppercase">universite</option>
                                <option value="lycee" className="uppercase">lycee</option>
                                <option value="formation" className="uppercase">formation</option>
                                <option value="electricien" className="uppercase">electricien</option>
                                <option value="reparation_phone" className="uppercase">reparation de telephone</option>
                                <option value="danse_club" className="uppercase">Club de danse</option>
                            </select>
                            <div class={classStyle.selectIcon}>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <label class={classStyle.label} for="description">
                    Description
                    </label>
                    <textarea aria-label="Description de métier"
                    type="text" placeholder="Decrire votre métier"
                    id="description"
                    class={classStyle.input}
                    name="description"
                    value={newService.description}
                    onChange={handleChange} 
                    required
                    ></textarea>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class={classStyle.label} for="adresse">
                    Adresse
                    </label>
                    <input aria-label="Enter l'url de votre site web"
                    type="text" placeholder="domaine site web (facultatif)"
                    id="adresse"
                    class={classStyle.input}
                    name="adresse"
                    value={newService.adresse}
                    onChange={handleChange} 
                    
                    />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class={classStyle.label} for="email">
                    email
                    </label>
                    <input aria-label="Enter your email"
                    type="email" placeholder="email"
                    id="email"
                    class={classStyle.input} 
                    name="email"
                    value={newService.email}
                    onChange={handleChange} 
                    required
                    />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class={classStyle.label} for="site_web">
                    Site web
                    </label>
                    <input aria-label="Enter l'url de votre site web"
                    type="text" placeholder="domaine site web (facultatif)"
                    id="site_web"
                    class={classStyle.input}
                    name="site_web"
                    value={newService.site_web}
                    onChange={handleChange} 
                    
                    />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class={classStyle.label} for="phone">
                    Phone
                    </label>
                    <input aria-label="Enter your phone"
                    type="text" placeholder="Phone"
                    id="phone"
                    class={classStyle.input} 
                    name="phone"
                    value={newService.phone}
                    onChange={handleChange} 
                    required
                    />
                    </div>
                </div>
                <label class={classStyle.label} for="image">
                    Image
                    </label>
                    <input aria-label="Enter your image"
                    type="file" 
                    accept=".png, .jpg, .jpeg"
                    onChange={handlePhoto}
                    class="mb-2"
                    name="image"
                    required
                    />
                    <div className="previewProfilePic w-1/4 md:w-1/2" >
                        {picture && <img className="playerProfilePic_home_tile w-1/4 " alt="Votre logo" src={picture && picture}></img>}
                    </div>
                
                <button type="submit"
                class="bg-indigo-400 py-2 rounded-bl-lg w-full mt-4">
                Enregistrer
                </button>
			</form>
            
		</div>
        </div>
    );
}
 
export default EditService;