import BadgeFeatures from "../atoms/label/features-badge"
import CardFeatures from "../card/cafe"
import '../body/style-body/Features.css'
import FeaturesButton from "../atoms/button/features_btn"

function Features() {
    return (
        <section className="sec-features">
            <div className="container-features">
                <div className="subsection-heading">
                    <BadgeFeatures/>
                    <div className="feder">
                        <h2 className="feature-heading">Features designed <br /> for you</h2>
                        <p className="feature-desc">Growth-accelerating products for startups, ecommerce <br /> stores, angel investors & more.</p>
                    </div>
                </div>
                <CardFeatures/>
                   <FeaturesButton/>
            </div>
        </section>
    )
}
export default Features