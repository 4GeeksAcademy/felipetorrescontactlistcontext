const ContactCard = ({name,phone, email, address}) => {

  return (
    <div className="card" style={{width:"18rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
            {phone}
        </p>
        <p>
            {email}
        </p>
        <p>
            {address}
        </p>
        <a href="#" >
          Go somewhere
        </a>
      </div>
      <button className="btn btn-primary">Editar usuario </button>
      <button className="btn btn-primary">eliminar usuario </button>
    </div>
  );
};

export default ContactCard;


