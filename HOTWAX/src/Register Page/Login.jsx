import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Username and Password are required");
            return;
        }

        const usernameverify = localStorage.getItem("user");
        const passwordverify = localStorage.getItem("password");

        if (usernameverify === username && password === passwordverify) {
            alert("Login successful");
            //navigate kara dena
            navigate("/dashboard")

        }
        else {
            alert("Sorry Invalid credentials")
        }

    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Login</h2>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
