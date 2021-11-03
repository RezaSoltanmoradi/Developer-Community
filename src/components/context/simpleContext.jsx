import { createContext } from 'react';

const SimpleContext = createContext({
    // wherever availble
    state: {},
    // events name: () => { }
    // deleted
});
export default SimpleContext;
