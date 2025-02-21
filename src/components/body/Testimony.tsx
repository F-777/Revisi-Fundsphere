import TestimonyButton from "../atoms/button/testimony_btn"
import Star from "../atoms/header/star_testi"
import TestimonyBadge from "../atoms/label/testimony-badge"
import CardTesti from "../card/cat"
import '../body/style-body/Testimony.css'

function Testimony() {
    return (
        <section className="testimony-section">
            <div className="testimony-container">

                {/*header*/}
                <div className="testi-heading-wrapper">
                    <div className="subs-head-testi">
                        <TestimonyBadge/>
                        <h2 className="testi-header">What others are <br /> saying about Us</h2>
                        <p className="testi-descript">Join hundreds of companies embracing <br /> Strategic Finance with Fundsphere.</p>
                    </div>
                    <Star/>
                </div>

                <CardTesti/>

                <TestimonyButton/>
            </div>
        </section>
    )
}

export default Testimony