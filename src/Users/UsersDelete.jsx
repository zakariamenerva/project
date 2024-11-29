import {useContext} from "react";
import {UsersContext} from "./UsersApp";
import {useParams} from "react-router-dom";

export default function UsersDelete() {

    const context = useContext(UsersContext)
    const params = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()
        context.actions.deleteUser({
            payload: {
                id: params.id
            }
        })
    }
    return (
        <>
            <h1>Voulez-vous supprimer ce stagiaire</h1>
            <div className="alert alert-danger" role="alert">
                <strong>danger</strong> La suppression est irréversible (vous ne pouvez pas revenir en arrière)
            </div>
            <button className="btn btn-danger" type="submit" onClick={handleSubmit}>DELETE</button>
        </>
    );
}