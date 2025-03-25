import { useEffect } from "react";
import formService from "../services/form";
import FormMolde from "../components/FormMolde";
import useGlobalReducer from "../hooks/useGlobalReducer";


const Formus = () =>{

    const { store, dispatch } = useGlobalReducer();

    const listForm = async () => {
        try{
            const forms = await formService.getForm();

            dispatch({type:"updateForms",forms})
        } catch(error){
            console.log(error);
            
        }
    };


    useEffect(() => {
        listForm();
    }, [])

    return (
        <div className="container mx-auto">
            
            <div className="row">
            {store.Formus.map(userData => (
                <FormMolde key={userData.id} {...userData}/>
            ))}
            </div>
        </div>
    
      );
}

export default Formus;