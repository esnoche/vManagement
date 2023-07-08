import React from 'react'

export default function AdminLogin() {
    return (
        <div>
            <div>
                <h3>Admin Login: </h3>
            </div>
            <div>
                <form>
                    <div>
                        <label>
                            Email:
                        </label>
                        <br />
                        <input
                            type='email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <br />
                        <input
                            type='password'
                            placeholder='Enter password'
                        />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
