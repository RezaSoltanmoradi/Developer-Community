import React, { useContext } from 'react';
import Todos from './todos';

const Todo = () => {
    const context = useContext();
    const { todo } = context;
    return (
        <div>
         {/* you should use todo.map */}
            {todo.map((todos) => (
                <Todos 
                    // put your props such as: deleted
                />
            ))}
        </div>
    );
};

export default Todo;
