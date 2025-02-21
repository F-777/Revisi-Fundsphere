import Logos from '../../assets/logos/Logo.svg'
import GetStartedButton from '../atoms/button/getstatred_btn'
import SignIn from '../atoms/button/signin_btn'
import '../body/style-body/Navbar.css'

function Navbar() {
    return (
        <>
            <section className="navbar-logo-left">
                <nav className="navbar-logo-left-container">
                    <div className="nav-container">
                        <div className="navbar-wrapper">
                            <div className="div-block">
                                <img src={Logos} alt="logo" />
                                <div className="nav-menu-wrapper">
                                    <ul className="nav-menu-two">
                                        <li className="dropdown">
                                            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
                                                Features ▾
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Landing Page V1</a></li>
                                                <li><a href="#">Landing Page V2</a></li>
                                                <li><a href="#">Landing Page V3</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="nav-link" href="#">Pricing</a></li>
                                        <li><a className="nav-link" href="#">About Us</a></li>
                                        <li><a className="nav-link" href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <SignIn/>
                                <GetStartedButton/>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default Navbar