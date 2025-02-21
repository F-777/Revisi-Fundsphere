import Pay from '../../assets/blog-insight/insight-pay.svg'
import Strategy from '../../assets/blog-insight/strategy.svg'
import Business from '../../assets/blog-insight/business.svg'
import '../card/card-style/cains.css'

function CardInsight() {
    return (
        <div className="insight-content-wrapper">
        <div className="insight-content">
            <div className="insight-small-card-pay">
                <div className="insight-image-wrapper-pay">
                    <img src={Pay} alt="insight-pay" />
                </div>
                <div className="insight-overview-pay">
                    <p className="desc-pay">Online Payment Failure: Why it <br /> Happens and How to Avoid it.</p>
                    <text className="pay-day">January 4, 2024</text>
                </div>
            </div>
            <div className="insight-small-card-strategy">
                <div className="insight-image-wrapper-strategy">
                    <img src={Strategy} alt="insight-strategy" />
                </div>
                <div className="insight-overview-strategy">
                    <p className="desc-strategy">Some of trategies for Quickly <br /> Expanding Your Business.</p>
                    <text className="strategy-day">February 8, 2024</text>
                </div>
            </div>
            <div className="insight-small-card-business">
                <div className="insight-image-wrapper-business">
                    <img src={Business} alt="insight-business" />
                </div>
                <div className="insight-overview-business">
                    <p className="desc-business">Business strategy converging into <br /> a new approach for <br />
                        solving business.</p>
                    <text className="business-day">January 16, 2024</text>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardInsight