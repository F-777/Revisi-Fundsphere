import '../button/style-btn/toggle-plan.css'

function ToggleButton() {
    return (
        <form action="form-block">
            <div className="form-switcher">
                <span>Monthly</span>
                <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
                <span>Yearly</span>
            </div>
        </form>
    )
}

export default ToggleButton