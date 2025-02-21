import '../button/style-btn/submit_btn.css'

function SubmitCTA() {
    return (
        <div className="cta-btn-wrapper">
            <button type="submit">Get Started</button>
            <input type="text" placeholder="Your work email" />
        </div>
    )
}
export default SubmitCTA