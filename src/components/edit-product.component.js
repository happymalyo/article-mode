import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from "react-router";


const EditProduct = () => {
	const {id} = useParams();
	const axiosProvider = require("axios").create({
        timeout: 120000, // 2 min
        baseURL:'http://localhost:5000'
    });
	const [product, setProduct] = useState(
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
	useEffect(() => {
        axiosProvider({
            method: "GET",
            url: "/produits/"+id,
            headers: { 'Access-Control-Allow-Origin': true }
        }).then((res) => {
            let data = {}
            Object.entries(res.data).forEach(([key, value]) => {
                console.log(key, value)
                data = Object.assign({},data,{[key]:value})
            })
			
			setProduct(data)
			console.log('list product',product)
        })
   },[])

   return(
    <div className="product-edit">
        <div className="flex flex-col
                items-center">
            <p className="text-indigo-500 text-xl uppercase tracking-wider mb-3 mt-5">
            Ajout de nouvel Article
            <hr/>
            </p>
            <p className="text-warning-500 uppercase">{newProduct.article}</p>
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
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label className={classStyle.label} for="article">
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
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label className={classStyle.label} for="couleur">
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

export default EditProduct;