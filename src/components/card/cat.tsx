import MariaEvelyn from '../../assets/testimony/MariaEvelyn.svg'
import JohnSmith from '../../assets/testimony/John Smith.svg'
import '../card/card-style/cat.css'

function CardTesti() {
    return (
        <div className="block-2">
            <div className="testi-wrapper">

                {/*maria evelyn*/}
                <div className="testi-card-maria">
                    <div className="testi-image-maria">
                        <img src={MariaEvelyn} alt="maria-evelyn-img" />
                    </div>
                    <div className="testi-quote-maria">
                        <h3 className="testimoni">“Simple, seamless processing. <br /> Payroll reduces the number of <br /> third parties we work with.“</h3>
                        <div className="testi-maria">
                            <text className="username">Maria Evelyn</text>
                            <text className="disc-mariah">Project Manager at <text className="company">Stripe</text></text>
                        </div>
                    </div>
                </div>

                {/*john smith*/}
                <div className="testi-card-john">
                    <div className="testi-image-john">
                        <img src={JohnSmith} alt="john-smith-img" />
                    </div>
                    <div className="testi-quote-john">
                        <h3 className="testimoni">“Simplified processes, reduced<br /> costs. Highly recommend“</h3>
                        <div className="testi-john">
                            <text className="username">John Smith</text>
                            <text className="disc-john">Operator Manager at <text className="company">Ebay</text></text>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardTesti