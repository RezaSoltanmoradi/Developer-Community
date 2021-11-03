import { useContext } from 'react';
import Person from './person';
import { SimpleContext } from './../context/simpleContext';

const People = () => {
    const context = useContext(SimpleContext);
    const { people } = context.state;
    return (
        <div>
            {people.map((person) => (
                <Person
                    kay={person.id}
                    fullname={person.fullname}
                    deleted={() => context.handleDeletePerson(person.id)}
                    chenged={(event) =>
                        context.handleChangeName(event, person.id)
                    }
                />
            ))}
        </div>
    );
};
export default People;
