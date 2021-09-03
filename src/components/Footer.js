import React from 'react';

function Footer(props) {
    return (
        <div>
            <img src="https://i.ibb.co/YTr8L4c/map.jpg" className="w3-image w3-greyscale-min" style={{width : "100%"}} />

            <footer className="container-fluid text-center">
                <a href="#myPage" title="To Top">
                    <span className="glyphicon glyphicon-chevron-up"></span>
                </a>
                <p>Static Page  Made By <a href="https://www.linkedin.com/in/vrunda-nawal1/" target="_blank" >Vrunda Nawal</a></p>
            </footer>
        </div>
    );
}

export default Footer;