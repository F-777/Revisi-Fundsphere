import ListIcon from '../../assets/pricing-plan/list.svg'
import '../card/card-style/capapi.css'

function CardPlan() {
    return (
        <div className="pricing-content">

            {/* pricing card basic */}

            <div className="package-card-bsc">
                <div className="package-gap-full-bsc">
                    <div className="package-heading-bsc">
                        <h3 className="sub-head-bsc">Basic</h3>
                        <p className="sub-desc-bsc">Kickstart product research <br />in your business at no cost.</p>
                    </div>
                    <ul className="list-bsc-price">
                        <li><img src={ListIcon} />Unlimited workspace</li>
                        <li><img src={ListIcon} />Access to RestAPI</li>
                        <li><img src={ListIcon} />Priority Customer Support</li>
                        <li><img src={ListIcon} />Real-Time Analytics</li>
                        <li><img src={ListIcon} />Data Export Capabilities</li>
                        <li><img src={ListIcon} />Advanced Security</li>
                        <li><img src={ListIcon} />Multi-User Access</li>
                    </ul>
                </div>
                <div className="package-gap-half-bsc">
                    <div className="package-price-bsc">
                        <h1 className="plan-heading-bsc">$199</h1>
                        <text>/month</text>
                    </div>
                    <button className="book-demo-btn">Book Demo</button>
                </div>
            </div>

            {/* pricing card pro */}

            <div className="package-card-pro">
                <div className="package-gap-full-pro">
                    <div className="package-heading-pro">
                        <h3 className="sub-head-pro">Pro</h3>
                        <p className="sub-desc-pro">Fuel your product workflow with <br />more advanced research features</p>
                    </div>
                    <ul className="list-pro-price">
                        <li><img src={ListIcon} />Unlimited workspace</li>
                        <li><img src={ListIcon} />Access to RestAPI</li>
                        <li><img src={ListIcon} />Priority Customer Support</li>
                        <li><img src={ListIcon} />Real-Time Analytics</li>
                        <li><img src={ListIcon} />Data Export Capabilities</li>
                        <li><img src={ListIcon} />Advanced Security</li>
                        <li><img src={ListIcon} />Multi-User Access</li>
                    </ul>
                </div>
                <div className="package-gap-half-pro">
                    <div className="package-price-pro">
                        <h1 className="plan-heading-pro">$250</h1>
                        <text>/month</text>
                    </div>
                    <button className="book-center">Book Demo</button>
                </div>
            </div>

            {/* pricing card enterprises */}

            <div className="package-card-eps">
                <div className="package-gap-full-eps">
                    <div className="package-heading-eps">
                        <h3 className="sub-head-eps">Enterprises</h3>
                        <p className="sub-desc-eps">Scale product research and <br /> learning across your company.</p>
                    </div>
                    <ul className="list-eps-price">
                        <li><img src={ListIcon} />Unlimited workspace</li>
                        <li><img src={ListIcon} />Access to RestAPI</li>
                        <li><img src={ListIcon} />Priority Customer Support</li>
                        <li><img src={ListIcon} />Real-Time Analytics</li>
                        <li><img src={ListIcon} />Data Export Capabilities</li>
                        <li><img src={ListIcon} />Advanced Security</li>
                        <li><img src={ListIcon} />Multi-User Access</li>
                    </ul>
                </div>
                <div className="package-gap-half-eps">
                    <div className="package-price-eps">
                        <h1 className="plan-heading-eps">$499</h1>
                        <text>/month</text>
                    </div>
                    <button className="book-demo-btn">Book Demo</button>
                </div>
            </div>
        </div>
    )
}
export default CardPlan