import SubmitCTA from "../atoms/button/submit_btn";
import '../body/style-body/CTA.css'
import Footer from "./Footer";

function CTA() {
    return (
        <div className="CTA-footer-wrap">
            <div className="sect-cta-v2">
                <div className="container-cta">
                    <div className="section-cta">
                        <div className="CTA-Wrapper">
                            <div className="CTA-content">
                                <h2 className="CTA-heading">Get started today for <br /> better future finance</h2>
                                <div className="CTA-Right">
                                    <p>Fundsphere is a compass for business leaders, scale with <br /> checking and savings accounts, custom tools, and <br /> access to our investor network.</p>
                                    <form action="input">
                                        <SubmitCTA/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default CTA
