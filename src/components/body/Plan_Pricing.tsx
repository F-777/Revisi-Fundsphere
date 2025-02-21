import ToggleButton from "../atoms/button/togle-plan";
import PricingPlanBadge from "../atoms/label/plan-badge";
import CardPlan from "../card/capapi";
import '../body/style-body/Plan_Pricing.css'

function PlanPricing() {
    return (
        <section className="sec-pricing">
            <div className="container-pricing">
                <div className="sub-head-pricing">
                    <PricingPlanBadge/>
                    <h2 className="pricing-header">Choose Package</h2>
                    <p className="pricing-desc">Join our pro features for unlimited<br /> without any contract and cancel anytime.</p>
                </div>
                <ToggleButton/>
                <CardPlan/>
            </div>
        </section>
    )
}

export default PlanPricing