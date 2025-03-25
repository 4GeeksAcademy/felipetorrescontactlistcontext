const baseUrl = "https://playground.4geeks.com/contact";

const user = "felipe";

const contactService = {
  getAgendas: async () => {
    try {
        const response = await fetch (`${baseUrl}/agendas`);
        const data = await response.json();

        return data.agendas 



    } catch (error) {
        console.log(error)
    }
  },

  getContacts : async () => {
    try {
      const response = await fetch(`${baseUrl}/agendas/${user}/contacts`);
      const data = await response.json();

      return data.contacts
    } catch (error) {
      console.log(error);
      
    }
  },

  
};

export default contactService;