import React from 'react';

function Title(props) {
    const styles = {
        backgroundColor:"#040338", 
        padding: "10px 0 10px 0",
        color:"white", 
        textAlign:"center"
    };
    return(
        <h1 style={styles}>{props.title}</h1>
    );
}

export default Title;