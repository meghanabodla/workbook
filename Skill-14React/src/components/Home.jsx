import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("userId")
        navigate("/login")
    }

    return (
        <div className="page-shell">
            <section className="dashboard-card card">
                <p className="eyebrow">Dashboard</p>
                <h1>Home Page</h1>
                <p className="support-text">
                    Your login worked successfully. Use the buttons below to view your profile or sign out.
                </p>

                <div className="action-row">
                    <button className="primary-btn" onClick={() => navigate("/profile")}>Profile</button>
                    <button className="secondary-btn" onClick={logout}>Logout</button>
                </div>
            </section>
        </div>
    )
}

export default Home
