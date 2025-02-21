import InsightButton from "../atoms/button/insight_btn"
import InsightBadge from "../atoms/label/insight-badge"
import CardInsight from "../card/cains"
import '../body/style-body/Insight.css'

function Insight() {
    return (
        <section className="insight-section">
                <div className="insight-container">
                    <div className="sub-heading-insight">
                        <InsightBadge/>
                        <h2 className="insight-head">Magazine</h2>
                        <p className="insight-sub-head-des">Find growth insight in our blog.</p>
                    </div>
                    <CardInsight/>
                    <InsightButton/>
                </div>
            </section>
    )
}

export default Insight