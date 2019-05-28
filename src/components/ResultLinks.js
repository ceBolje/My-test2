import React            from 'react';
import { Link }         from 'react-router-dom';


const ResultLinks = ({ city }) => (

    <div>
        <div className="mt1 mb1 text-center text-muted">
            <h4>
                <span className="text-bold">{ city.city  }, { city.country  }</span>
            </h4>
        </div>
        <div className="text-center">
            <Link className="text-muted block mb1" title="" to={'/' +  city.cityId + '/food'}>
                Top 10 Cheapest food places in { city.city }
            </Link>
        </div>
    </div>
);

export default (ResultLinks);

