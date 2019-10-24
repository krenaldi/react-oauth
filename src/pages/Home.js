import React from 'react';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center"}}>
            <p className="page-title">Simple OAuth with Node</p>
            <p style={{ fontSize: 20 }}>
                Login with <span style= {{ color: "var(--primary-blue)" }}>Facebook</span>,
                <span style= {{ color: "var(--primary-red)" }}>Google</span>, 
                <span style= {{ color: "var(--primary-black)" }}>Github</span>.
            </p>
            <Terminal 
                userData={"passport.authenticate('facebook')"} 
                selected="All"
            />
            <p style={{ fontSize: 28 }}>
                Popular Login Strategies
            </p>
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;
