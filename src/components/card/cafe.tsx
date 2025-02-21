import Right from '../../assets/features/level.svg'
import Left from '../../assets/features/scan.svg'
import '../card/card-style/cafe.css'

function CardFeatures() {
    return (
        <div className="features-content">
            <div className="features-wrapper-up">
                <div className="features-card-wrapper-1">
                    <div className="features-card">
                        <div className="features-card-heading">
                            <h3>Pay with Fundsphere, quick,<br /> simple and easy</h3>
                            <p>Use Fundsphere to pay to a merchant and <br /> enjoy optimal payment user experience.</p>
                        </div>
                        <img src={Left} alt="image-scan" />
                    </div>
                </div>
                <div className="features-card-wrapper-2">
                    <div className="features-card">
                        <div className="features-card-heading">
                            <h3>Bank-level Security</h3>
                            <p>Personal information is encrypted and protected <br /> by industry standard banking security.</p>
                        </div>
                        <img src={Right} alt="level-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardFeatures