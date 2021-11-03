import React, { useContext } from 'react';
import SimpleContext from './../context/simpleContext';

const Header = () => {
    const contex = useContext(SimpleContext);
    const { showHeader } = contex.state;
    const { apptitle } = contex.state;

    return (
        <div>
            <div className="allert alert-info ">
                <h2>{apptitle}</h2>
                <h5>
                    <div className=" alert alert-light">
                        <p>
                            <span className="badge pill ">{showHeader}</span>
                            تعداد اشخاص
                        </p>
                    </div>
                </h5>
            </div>
        </div>
    );
};

export default Header;
