import { createContext } from 'react';

const SimpleContext = createContext({
    state: {},
    handleDeletePerson: () => {},
    handleChangeName: () => {},
    handleNewPerson: () => {},
    submitPerson: () => {},
});
export default SimpleContext;
