import React from 'react';
import PropTypes from "prop-types";


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
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
  };

export default Row;
