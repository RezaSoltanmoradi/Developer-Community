import { Component } from 'react';
import SimpleContext from './../context/simpleContext';
class GlobalState extends Component {
    constructor() {
        super();
    }
    state = {
        // character
        // todo: []
    };
    // events = () => { return events}
    // deleted = () => { return (deleted) }
    render() {
        return (
            <SimpleContext.Provider
                value={{
                    // all charactor
                    state: this.state,
                    //  events: this.events
                    //  deleted: this.deleted
                }}
            >
                 {/* this is required */}
                {this.props.children}
            </SimpleContext.Provider>
        );
    }
}
export default GlobalState;
