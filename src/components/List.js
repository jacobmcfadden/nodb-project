import React from 'react';
import EstimateCard from './EstimateCard';

import '../styling/List.css';

const List = (props) => {
    const { estimates, handleSelected } = props
    const list = estimates.map(estimate => {
        return <EstimateCard estimate={estimate} key={estimate.id} handleSelected={handleSelected} />
    });
    return (
            <section className="page-section bg-light" id="estimate">
                <div className="container">
                    <div className="row">
                        {list}
                    </div>
                </div>
            </section>
    )
}

export default List;