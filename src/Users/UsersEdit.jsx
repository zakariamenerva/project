import { useContext, useEffect, useRef, useState } from "react";
import { UsersContext } from "./UsersApp";
import { useParams } from "react-router-dom";

export default function UsersAdd() {
  const context = useContext(UsersContext);
  const fullName = useRef(null);
  const prenom = useRef(null);
  const cin = useRef(null);
  const filiere = useRef(null);
  const [currentUser, setCurrentUser] = useState({});
  const params = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.updateUser({
      payload: {
        fullName: fullName.current.value,
        prenom :  prenom.current.value,
        cin: cin.current.value,
        filiere: filiere.current.value,
        id: parseInt(params.id),
      },
    });
  };
  useEffect(() => {
    const { id } = params;
    const user = context.users.filter((user) => user.id === parseInt(id));
    if (user.length > 0) {
      setCurrentUser(...user);
    } else {
      console.error("User not found");
    }
  }, []);
  return (
    <>
      <h1>Ajouter un stagiaire</h1>
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
              defaultValue={currentUser?.fullName}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="prenom" className="col-sm-2 col-form-label">
             prénom
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              ref={prenom}
              defaultValue={currentUser?.prenom}
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
              defaultValue={currentUser?.cin}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="filiere" className="col-sm-2 col-form-label">
            Filière
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="filiere"
              name="fullName"
              ref={filiere}
              defaultValue={currentUser?.filiere}
            />
          </div>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            MISE À JOUR
          </button>
        </div>
      </form>
    </>
  );
}
