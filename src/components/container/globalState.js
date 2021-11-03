import { Component } from 'react';
import SimpleContext from './../context/simpleContext';

class GlobalState extends Component {
    constructor() {
        super();
    }
    state = {
        people: [],
        person: '',
        showPeople: true,
        showHeader: true,
        apptitle: 'مدیریت کننده اعضا',
    };
    render() {
        return (
            <SimpleContext.Provider
                value={{
                    people: this.state.people,
                    person: this.state.person,
                    handleDeletePerson: this.handleDeletePerson,
                    handleNewPerson: this.handleNewPerson,
                    handleChangeName: this.handleChangeName,
                }}
            >
                {this.props.children}
            </SimpleContext.Provider>
        );
    }
}
export default GlobalState;
