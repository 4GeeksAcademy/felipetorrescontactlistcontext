

const baseUrl = "https://playground.4geeks.com/contact";

const user = "felipe";

const formService  = {


  getForm: async () => {

    try {
        const response = await fetch (`${baseUrl}/agendas/${user}`,
          {
            method: "POST",
            headers:{
              "content-Type": "application/jason",
            }
          });

          if (response.status == 201) {
            return alert("Usuario Creado");
          }
    
          if (response.status == 400) {
            
            return alert("Usuario ya existe");
          }

        const data = await response.json();

        return data.agendas 



    } catch (error) {
        console.log(error)
    }
  },
  };

  export default formService;