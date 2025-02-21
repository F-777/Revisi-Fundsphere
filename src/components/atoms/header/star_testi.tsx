import StarTesti from '../../../assets/testimony/Star.svg'
import '../header/star_testi.css'

function Star() {
    return (
        <div className="star-testimony">
            <div className="star-content">
                <div className="star-wrapper">
                    <img src={StarTesti} />
                    <text>4.9</text>
                </div>
                <text>REVIEW FROM TRUSTPILOT</text>
            </div>
        </div>
    )
}

export default Star