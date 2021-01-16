import React from 'react';

function More(props) {
    const styles = {
        padding: "10px 30px 10px 0",
        color:"maroon", 
        textAlign:"center"
    };
    return(
        <h6 style={styles}>{props.info}</h6>
    );
}

export default More; 