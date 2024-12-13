import {createContext, useState} from "react";
import UsersLayout from "./UsersLayout";

export const UsersContext = createContext({
    users: [],
    lastId: 0,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
})

export default function UsersApp() {
    const [users, setUsers] = useState([
        {id: 1, fullName: 'Menerva ', prenom: 'Zakaria', cin :'AS19275' , filiere :'development digital' },
        {id: 2, fullName: 'Hmoumi ', prenom: 'Adam', cin :'AS46926' , filiere :' Génie civil' },
        {id: 4, fullName: 'Nassiri ', prenom: 'Ilham', cin :'AS207455' , filiere :' Mécanique' },
        {id: 5, fullName: 'Zeroule ', prenom: 'Hamid', cin :'AS84529' , filiere :'Production industrielle' },
        {id: 6, fullName: 'Benhlal ', prenom: 'Abdelkhalke', cin :'AS38503' , filiere :'finance ' },
        {id: 7, fullName: 'Anass', prenom: 'Lmherzi',cin :'AS27029', filiere :"gestion d'entreprise" ,}
    ])
    
    const [lastId, setLastId] = useState(users.length)
    const addUser = (data) => {
        setUsers(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState + 1)
        window.history.back()
    }

    const deleteUser = (data) => {
        setUsers(prevState => prevState.filter(user  => user.id !== parseInt(data.payload.id)))
        window.history.back()
    }

    const updateUser = (data) => {
        const {id, ...rest} = data.payload
        setUsers(prevState => prevState.map(user => {
            if (user.id === id) {
                return {id: user.id,...rest}
            }
            return user
        }))
        window.history.back()
    }
    return (
        <>
            <UsersContext.Provider value={{
                users: users,
                lastId: lastId,
                actions: {
                    addUser,
                    deleteUser,
                    updateUser
                }
            }}>
                <UsersLayout/>
            </UsersContext.Provider>
        </>
    );
}