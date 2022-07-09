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
			<h2>Edit here</h2>
		</div>
	)
}

export default EditProduct;