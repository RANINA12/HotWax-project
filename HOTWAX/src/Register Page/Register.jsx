import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const [names, setname] = useState("");

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value) ? "" : "Email should be in a valid format";
    };

    useEffect(() => {
        const isValid = email && password && confirmPassword && !emailError && !passwordError && !confirmPasswordError;
        setDisabled(!isValid);
    }, [email, password, confirmPassword, emailError, passwordError, confirmPasswordError]);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(
            value.length < 6 ? "Password should be at least 6 characters" : ""
        );
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmPasswordError(
            value !== password ? "Confirm Password must match the Password" : ""
        );
    };

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem("user", email)
        localStorage.setItem("name", names);
        localStorage.setItem("password", password);
        alert("Registered Successfully");
        navigate("/login");
    };

    return (
        <form onSubmit={handleRegister} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Register</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={names}
                    onChange={(e) => { setname(e.target.value) }}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {confirmPasswordError && (
                    <p style={{ color: "red" }}>{confirmPasswordError}</p>
                )}
            </div>

            <button type="submit" disabled={disabled} >
                Register
            </button>
        </form>
    );
}

export default Register;
