import SubmitCTA from "../atoms/button/submit_btn";
import MoneyCharger from '../../assets/hero-home/moneycharger.svg'
import Costreduction from '../../assets/hero-home/constredution.svg'
import MaskGrup from '../../assets/hero-home/Mask group.svg'
import '../body/style-body/Hero.css'

function HeroSection() {
    return (
        <section className="section-hero-home" id="home">
            <div className="container">
                <div className="hero-home-container">
                    <div className="hero-home">
                        <img src={MoneyCharger} alt="money-charger" />
                        <div className="griden-comp">
                            <img src={Costreduction} alt="cost-reduct" />
                            <img src={MaskGrup} alt="mask-grup" />
                        </div>
                    </div>
                    <div className="hero-home-content">
                        <div className="hero-heading">
                            <div className="label-badge-head">
                                <text>BEST CHOICE</text>
                            </div>
                            <h1 className="introduce-header">Future strategic finance for <br /><text>Enterprenurs</text></h1>
                            <p className="intro-head-desc">Scale with checking and savings accounts, custom tools, and access to our investor network.</p>
                        </div>
                        <form action="input">
                            <SubmitCTA />
                        </form>
                        <div className="overview-content">
                            <div className="overview-item">
                                <text>10%</text>
                                <p>Benefical Cashback</p>
                            </div>
                            <div className="overview-item">
                                <text>7M</text>
                                <p>Satisfied Customer</p>
                            </div>
                            <div className="overview-item">
                                <text>40+</text>
                                <p>Country Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
