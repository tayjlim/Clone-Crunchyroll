import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {

    return (
        <div className="footerContainer">
            <h2>Technologies Used:</h2>
            <div className="footerColumn1">
                <div className="">Javascript</div>
                <div className="">REACT</div>
                <div className="">Redux</div>
                <div className="">Amazon Web Services</div>
            </div>
            <div className="footerColumn2">
                <div className="">Python</div>
                <div className="">Flask</div>
                <div className="">SQLAlchemy</div>
                <div className="">PostgreSQL</div>
            </div>
            <div className="footerColumn3">
                <h2>Contributors:</h2>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Danish Prasla</p>
                    <a href="https://www.linkedin.com/in/danish-prasla-819a7199/">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/danishprasla">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661092192387/githubLogo.png" />
                    </a>
                </div>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Kevin Huang</p>
                    <a href="https://www.linkedin.com/in/kevin-huang-a53139186/">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/kevinhuang1208">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661092192387/githubLogo.png" />
                    </a>
                </div>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Taylor Lim</p>
                    <a href="https://www.linkedin.com/in/tayjlim0592/">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/tayjlim">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661092192387/githubLogo.png" />
                    </a>
                </div>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Steven Cornwall</p>
                    <a href="https://www.linkedin.com/in/steven-cornwall-b4551b20b/">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/taylorcornwall766">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661092192387/githubLogo.png" />
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Footer;
