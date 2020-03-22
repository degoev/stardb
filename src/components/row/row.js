import React from 'react';

function Row(props) {
    return (
        <div className="row mb2">
            <div className="col-md-6">
               {props.left}
            </div>
            <div className="col-md-6">
                {props.right}
            </div>
        </div>
    );
}

export default Row;
