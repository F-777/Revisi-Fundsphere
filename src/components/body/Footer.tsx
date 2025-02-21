import FootLogo from '../../assets/footer-bottom/Footer.svg'
import Socmed from '../../assets/footer-bottom/Socmed.svg'
import '../body/style-body/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <div className="footer-top">
                    <div className="menus-row">
                        {/*Platform footer section*/}
                        <div className="menus-col-platform">
                            <text className="header-col">Platform</text>
                            <div className="menu-links-platform-wrapper">
                                <li><a href="#">Why Fundsphere?</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                            </div>
                        </div>
                        {/*Features footer section*/}
                        <div className="menus-col-features">
                            <text className="header-col">Features</text>
                            <div className="menu-links-features-wrapper">
                                <li><a href="#">Payments</a></li>
                                <li><a href="#">API</a></li>
                                <li><a href="#">Ecommerce</a></li>
                                <li><a href="#">Business</a></li>
                            </div>
                        </div>
                        {/*Company footer section*/}
                        <div className="menus-col-company">
                            <text className="header-col">Company</text>
                            <div className="menu-links-company-wrapper">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Blog</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="footer-icon-paragraph">
                        <img src={FootLogo} alt="" />
                        <p>Sudirman St., 12B, Malang <br />+1 215-2231-5523 <br /> hello@fundsphere.id</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <text className="copy-right">© Fundsphere Copyright 2024. All Rights Reserved.</text>
                    <div className="footer-icon">
                        <img src={Socmed} alt="social" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer