const FormMolde = ()=> {

return(
<div className=" mx-auto p-5">
<form >
  <div className="mb-3 m">
    <label className="form-label" ></label>
    <input type="text" className="form-control" placeholder= " Your Name" />
    <div className="form-text"></div>
  </div>
  <div className="mb-3">
    <label  className="form-label" ></label>
    <input type="email" className="form-control" placeholder="Your  Email"/>
  </div>
  <div className="mb-3">
    <label  className="form-label" ></label>
    <input type="text" className="form-control" placeholder="Your Phone"/>
  </div>
  <div className="mb-3">
    <label  className="form-label" ></label>
    <input type="text" className="form-control" placeholder="Your Adress"/>
  </div>
  <div>
    <p>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.</p>
  </div>
  <button type="submit" className="btn btn-primary">Create User</button>
</form>
</div>
);

};

export default FormMolde; 