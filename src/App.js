import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";

const App =()=> {

    /**
     * First
     * 
     * Create state for form; collect information that is needed; formData is an object
     */
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        password: '',
        dayClass: true,
        eveningClass: false,
        comments: ''
    })

    /**
     * Fourth
     * 
     * handleChange function; takes in event as argument; pass this into Form component as a prop
     */
    const handleChange =(event)=> {
        const { name, value, type, checked } = event.target
        
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    /*

        Sixth

        handleSubmit function; pass it in Form component as a prop 
    */
    const handleSubmit =(event)=> {
        event.preventDefault()
        console.log(formData)
    }

    /*
        Third

        Pass in formData properties as a prop into Form component
    */
     
    return ( 
        <>
            <Header username={formData.username}/>
            <Form 
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                userName={formData.userName}
                phone={formData.phone}
                password={formData.password}
                dayClass={formData.dayClass}
                eveningClass={formData.eveningClass}
                comments={formData.comments}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default App

