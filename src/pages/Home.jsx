import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactService from "../services/contactService.js";

import form from "../services/form.js";
import FormMolde from "../components/FormMolde.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleContact = async () => {
	try {
		const agendas = await contactService.getAgendas();
		console.log(agendas)
	} catch (error) {
		console.log(error)
	}
  };

  const handleForm = async () => {
    try {
      const formularios = await form.getForm();
      console.log(formularios);
      
    } catch (error) {
      console.log(error);
      
      
    }
  };

  useEffect(()=> {handleContact(),handleForm()},[])

  return (
    <div className="text-center mt-5">
      <h1>Lista de Contactos</h1>
      <FormMolde/>
    </div>
  );
};

export default Home;