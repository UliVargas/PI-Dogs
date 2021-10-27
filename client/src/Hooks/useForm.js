import { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux"
import {fetchDogs} from "../Redux/actions/index"

export const useForm = (initialForm) => {

    const {searchResults} = useSelector(state => state);
    const [form, setForm] = useState(initialForm);
    const [fail, setFail] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    let namesArr = [];
        
    for(let b of searchResults) {
    namesArr.push(b.name)        
    }
    


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    const handleBlur = (e) => {
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.breedName && form.minHeight && form.maxHeight && form.minWeight && form.maxWeight && form.minLife_span && form.maxLife_span && form.img) {

            if(namesArr.find(b => b === form.breedName)) {
                setLoading(false)
                alert("The breed name already exists")
            } else {
                
                setLoading(true);
                axios.post("http://localhost:3001/dog", {
                    name: form.breedName,
                    height: `${form.minHeight} - ${form.maxHeight}`,
                    weight: `${form.minWeight} - ${form.maxWeight}`,
                    life_span: `${form.minLife_span} - ${form.maxLife_span}`,
                    img: form.img,
                    temperaments: form.temperaments?.split(","),
                })
                   .then(data => {
                       setLoading(false)
                       setResponse(true);
                       setForm(initialForm)
                       setTimeout(() => {
                           setResponse(false)
                           fetchDogs()
                       }, 3000)
                   })
                }
        } else {
            
                if(!form.breedName) {
                    setFail(true);
                    setError('Sorry, enter a name')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.minHeight) {
                    setFail(true);
                    setError('Sorry, enter a Min Height In CM')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.maxHeight) {
                    setFail(true);
                    setError('Sorry, enter a Max Height In CM')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.minWeight) {
                    setFail(true);
                    setError('Sorry, enter a Min Weight In KG')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.maxWeight) {
                    setFail(true);
                    setError('Sorry, enter a Max Weight In KG')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.minLife_span) {
                    setFail(true);
                    setError('Sorry, enter a Min Years Of Life')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
                if(!form.maxLife_span) {
                    setFail(true);
                    setError('Sorry, enter a Max Years Of Life')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                 }
                 if(!form.img) {
                    setFail(true);
                    setError('Sorry, enter a Image')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                 }
                 
                 if(!form.breedName && !form.minHeight && !form.maxHeight && !form.minWeight && !form.maxWeight && !form.minLife_span && !form.maxLife_span && form.img) {
                    setFail(true);
                    setError('Please complete the form')
                    setTimeout(() => {
                        setFail(false)
                        setError("")
                    }, 3000)
                }
        }

    };


    return {
        form,
        fail,
        error,
        loading,
        response,
        handleBlur,
        handleSubmit,
        handleChange
    }
};