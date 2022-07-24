import React from "react";
import '../style/variables.css'

export default function Footer(){
    const style = {
        backgroundColor: 'var(--bg-dark)',
        color: '#fff',
        width: '100%',
        height: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-secondary)',
        marginTop: "1rem"
}
    return(
        <div style={style} className="Footer">
            <h3>Footer</h3>
        </div>
    )
}