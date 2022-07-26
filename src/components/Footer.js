import React from "react";
import '../style/variables.css'
import '../style/Footer.css'
export default function Footer(){
    const style = {
        backgroundColor: 'var(--bg-dark)',
        color: 'black',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-secondary)',
        marginTop: "1rem"
}
    return(
        <div style={style} className="footer-container">
            <div className="footer-items">
                <a href="https://www.facebook.com/jimuel.baraero" target='_blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' atl='' />
                </a>
                <a href="https://github.com/J1MMM" target='_blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' atl='' />
                </a>
                <a href="https://www.linkedin.com/in/jimuel-baraero-b49628243" target='_blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/61/61109.png' atl='' />
                </a>
            </div>
        </div>
    )
}