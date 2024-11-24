import {useContext} from "react";
import {UsersContext} from "./UsersApp";
import {Link} from "react-router-dom";

export default function UsersTable() {
    const context = useContext(UsersContext)
    return (<>
        <h1>les stagiaires</h1>
        <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
            <tr>
                <th>#ID</th>
                <th>nom </th>
                <th>prénom</th>
                <th>Cin</th>
                <th>Filière</th>
                <th>Opérations</th>
            </tr>
            </thead>
            <tbody>
            {
                (context.users?.length > 0) ? context.users.map((user, key) => <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.prenom}</td>
                    <td>{user.cin}</td>
                    <td>{user.filiere}</td>
                    <td>
                        <Link to={`/user/${user.id}/edit`} className={'btn btn-primary mx-1'}>Mise à jour</Link>
                        <Link to={`/user/${user.id}/delete`} className={'btn btn-danger'}>Supprimer</Link>
                    </td>
                </tr>) : <tr><td colSpan={4} align={"center"}>No items</td></tr>
            }
            </tbody>
        </table>
    </>);
}