import React from "react";
 
function Footer(){
    let currentYear = new Date().getFullYear();
    return(
        <footer>
            <p>
                {currentYear}&copy; KRITARTHA
            </p>
        </footer>
    );
}

export default Footer;