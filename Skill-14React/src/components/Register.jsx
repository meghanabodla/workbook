import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/auth/register", {
            name, email, password
        }).then(() => {
            navigate("/login")
        })
    }

    return (
        <div className="page-shell">
            <section className="auth-layout">
                <div className="auth-copy">
                    <p className="eyebrow">Skill 14 React App</p>
                    <h1>Create your account</h1>
                    <p className="support-text">
                        Join the portal with a brighter style, better spacing, and a cleaner registration experience.
                    </p>
                    <div className="feature-strip">
                        <span>Simple registration</span>
                        <span>Fast login</span>
                        <span>Profile access</span>
                    </div>
                </div>

                <div className="card auth-card">
                    <h2>Register</h2>
                    <p className="card-text">Enter your details to create a new account.</p>

                    <form className="form-grid" onSubmit={submit}>
                        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="primary-btn">Register</button>
                    </form>

                    <p className="form-link">
                        Already registered?{" "}
                        <button type="button" className="link-btn" onClick={() => navigate("/login")}>
                            Login here
                        </button>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Register
