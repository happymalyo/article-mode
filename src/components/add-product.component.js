import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const CreateProduct = () => {
    const classStyle = {
        label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        select: "block appearance-none w-full bg-gray-200 border  border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        input:`text-sm text-gray-base w-full
        mr-3 py-5 px-4 h-3 focus:outline-none border-b-2 border-gray-200
        border-gray-200 mb-2`,
        selectIcon: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    };

    const [newProduct, setNewProduct] = useState(
        {
            article: "",
            couleur: "",
            image: "",
            marque: "",
            qualite: "",
            taille: "",
            prix: "",
            type: "",
        }
    );

    const [picture, setPicture] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setNewProduct({...newProduct,[e.target.name] : e.target.value}) //Object.assign(target,data)
    }

    const handlePhoto = (e) => {
        setNewProduct({...newProduct, image: e.target.files[0]});
        setPicture(URL.createObjectURL(e.target.files[0]) );
    }

    //Sending data
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

    const sendProduct = async (params) => {
        const result =  await axiosProvider({
            method: "POST",
            url: "/produits/add",
            data: datas(params, "multipart/form-data"),
            headers: { 'Access-Control-Allow-Origin': true }
        });
        return result;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendProduct(newProduct)
        history.push('/admin');
    }
    return(
        <div className="product">
            <div class="flex flex-col
					items-center">
                <p class="text-indigo-500 text-xl uppercase tracking-wider mb-3 mt-5">
                Ajout de nouvel Article
                <hr/>
                </p>
                <p class="text-warning-500 uppercase">{newProduct.article}</p>
                <form onSubmit={handleSubmit} className="shadow-xl px-5 py-5 w-2/4 sm:w-3/4" encType='multipart/form-data'>
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
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="article">
                        Article
                        </label>
                        <input aria-label="Enter title"
                        type="text" placeholder="Article"
                        id="article"
                        class={classStyle.input}
                        name="article"
                        value={newProduct.article}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="couleur">
                        Couleur
                        </label>
                        <input aria-label="Enter couleur"
                        type="text" placeholder="Couleur"
                        id="couleur"
                        class={classStyle.input}
                        name="couleur"
                        value={newProduct.couleur}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="marque">
                        Marque
                        </label>
                        <input aria-label="Enter marque"
                        type="text" placeholder="Marque"
                        id="marque"
                        class={classStyle.input}
                        name="marque"
                        value={newProduct.marque}
                        onChange={handleChange} 
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="qualite">
                        Qualite
                        </label>
                        <input aria-label="Enter qualite"
                        type="text" placeholder="Qualite"
                        id="qualite"
                        class={classStyle.input}
                        name="qualite"
                        value={newProduct.qualite}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="taille">
                        Taille
                        </label>
                        <input aria-label="Enter taille"
                        type="text" placeholder="Taille"
                        id="taille"
                        class={classStyle.input}
                        name="taille"
                        value={newProduct.taille}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="prix">
                        Prix (AR)
                        </label>
                        <input aria-label="Enter prix"
                        type="text" placeholder="Prix"
                        id="prix"
                        class={classStyle.input}
                        name="prix"
                        value={newProduct.prix}
                        onChange={handleChange} 
                        required
                        />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <label class={classStyle.label} for="type">
                        Type
                        </label>
                        <input aria-label="Enter type"
                        type="text" placeholder="Type"
                        id="type"
                        class={classStyle.input}
                        name="type"
                        value={newProduct.type}
                        onChange={handleChange} 
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

export default CreateProduct;