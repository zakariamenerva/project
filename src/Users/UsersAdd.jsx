import { useContext, useRef } from "react";
import { UsersContext } from "./UsersApp";

export default function UsersAdd() {
  const context = useContext(UsersContext);
  const fullName = useRef(null);
  const prenom = useRef(null);
  const cin = useRef(null);
  const filiere = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.addUser({
      payload: {
        fullName: fullName.current.value,
        prenom: prenom.current.value,
        cin :cin.current.value,
        filiere :filiere.current.value,
        id: context.lastId + 1,
      },
    });
    fullName.current.value = "";
    prenom.current.value = "";
    cin.current.value = "";
    filiere.current.value = "";
  };
  return (
    <>
      <h1>ajouter stagaire</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="fullName" className="col-sm-2 col-form-label">
            Nom
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              ref={fullName}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="fullName" className="col-sm-2 col-form-label">
            prénom
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              ref={prenom}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="cin" className="col-sm-2 col-form-label">
           Cin
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="cin"
              name="cin"
              ref={cin}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="filiere" className="col-sm-2 col-form-label">
          filière
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="filiere"
              name="filiere"
              ref={filiere}
            />
          </div>
        </div>
    
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            AJOUTER
          </button>
        </div>
      </form>
    </>
  );
}
