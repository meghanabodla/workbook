import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/auth/login", {
            email, password
        }).then(res => {
            if (res.data) {
                localStorage.setItem("userId", res.data.id)
                navigate("/home")
            } else {
                alert("Invalid Login")
            }
        })
    }

    return (
        <div className="page-shell">
            <section className="auth-layout">
                <div className="auth-copy">
                    <p className="eyebrow">Welcome Back</p>
                    <h1>Login to continue</h1>
                    <p className="support-text">
                        Access your home page and profile with a colorful card layout that feels much more polished.
                    </p>
                    <div className="feature-strip">
                        <span>Secure login</span>
                        <span>Quick access</span>
                        <span>Modern design</span>
                    </div>
                </div>

                <div className="card auth-card">
                    <h2>Login</h2>
                    <p className="card-text">Use your registered email and password.</p>

                    <form className="form-grid" onSubmit={submit}>
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="primary-btn">Login</button>
                    </form>

                    <p className="form-link">
                        Need an account?{" "}
                        <button type="button" className="link-btn" onClick={() => navigate("/")}>
                            Register now
                        </button>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Login
