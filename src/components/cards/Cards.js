import React from 'react';

const Card = ({ img, name, href, color }) => {
    const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    return (
        <div
            className="card" 
            style={{ borderRadius: 50 }} 
            onClick={() => window.location = href}
            >

        {/* <div>
            <p style={{ margin: 0, textAlign: "left", padding: "5px 0px 5px 10px" }}>
                {NAME}
            </p>
        </div> */}
        <div 
            style={{
                borderRadius: "50%",
                minHeight: 75,
                minWidth: 75, 
                background: `url("${img}") no-repeat center center / 50% ${color}`
            }}/>
        </div>    
    );
};

export default Card;