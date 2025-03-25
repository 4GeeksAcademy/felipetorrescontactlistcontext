import contactService from "../services/contactService.js";
import { useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const Contacts =  () => {
    
    const { store, dispatch } = useGlobalReducer();


    const getlistContacts = async () => {
        try {
            const contacts = await contactService.getContacts();
            
            dispatch({type:"updateContacts",contacts})
            
        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(() => {
        getlistContacts();
    }, [])

  return (
    <div className="container mx-auto">
        
        <div className="row">
        {store.contacts.map(userData => (
            <ContactCard key={userData.id} {...userData}/>
        ))}
        </div>
    </div>

  );
};

export default Contacts; 
