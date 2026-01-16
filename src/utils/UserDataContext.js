import {createContext} from 'react';

const UserDataContext = createContext({
    name: "Default Name",
});

export default UserDataContext;