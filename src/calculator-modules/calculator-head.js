import React from 'react';


function CalculatorTop(props) {
    return <div className="calc-head">
        <h1 className="head__title">
            Calculator
            </h1>
        <div className="head-buttons">
            <div className="head__btn" id="min">&#x2500;</div>
            <div className="head__btn" id="full">&#9723;</div>
            <div className="head__btn head__btn--close" id="close">&#128936;</div>
        </div>
    </div>
}

export default CalculatorTop;