import Uber from '../../assets/ads-overview/uber.svg'
import Amazon from '../../assets/ads-overview/amazon.svg'
import Ebay from '../../assets/ads-overview/ebay.svg'
import Walmart from '../../assets/ads-overview/walmart.svg'
import '../body/style-body/Overview.css'

function Overview() {
    return (
        <section className="section-overview">
        <div className="container-overview">
            <div className="overview-content">
                <div className="company-logo">
                    <img src={Uber} alt="uber-logo" />
                    <img src={Amazon} alt="amazon-logo" />
                    <img src={Ebay} alt="ebay-logo" />
                    <img src={Walmart} alt="walmart" />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Overview