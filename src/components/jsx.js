import React, {Fragment} from 'react';

const Jsx = () => {

    const temp = 21;

    return ( 
        <Fragment>
            <h2>Hace frio o calor?</h2>
            <h4>
                {
                    temp < 20 ? "Hace frio" : "Hace calor"
                }
            </h4>
        </Fragment>
     );
}
 
export default Jsx;