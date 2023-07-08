import { useState } from "react";

export default function ManagerLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <div>
                <h3>Manager Login: </h3>
            </div>
            <div>
                <form onSubmit={loginHandler}>
                    <div>
                        <label>
                            Email:
                        </label>
                        <br />
                        <input
                            type='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <br />
                        <input
                            type='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
