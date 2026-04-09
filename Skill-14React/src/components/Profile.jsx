import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Profile() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const id = localStorage.getItem("userId")

    useEffect(() => {
        axios.get(`http://localhost:8080/auth/user/${id}`)
            .then(res => setUser(res.data))
    }, [id])

    return (
        <div className="page-shell">
            <section className="profile-card card">
                <p className="eyebrow">User Details</p>
                <h2>Profile</h2>

                <div className="profile-grid">
                    <div className="profile-item">
                        <span>Name</span>
                        <strong>{user.name || "Loading..."}</strong>
                    </div>
                    <div className="profile-item">
                        <span>Email</span>
                        <strong>{user.email || "Loading..."}</strong>
                    </div>
                </div>

                <button className="secondary-btn" onClick={() => navigate("/home")}>Back to Home</button>
            </section>
        </div>
    )
}

export default Profile
