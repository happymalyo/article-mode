import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout( () => {
             fetch(url)
             .then((res) => {
                 if(!res.ok) {
                     throw Error('Could not fetch the data for that ressource')
                 }
                 return res.json();
             })
             .then(data => {
                 setData(data);
                 setIsPending(false);
                 setError(null);
             })
             .catch((e) => {
                 setIsPending(false)
                 setError(e.message);
             })
        }, 2000);
        return () => console.log('Clean up');
     }, [url]);
     
     return {data, isPending, error};
}

export default useFetch; 