import React from 'react';

const Login = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #a8e063, #56ab2f)',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '600px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '20px' }}>Login</h2>
                <form style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                        flexGrow: 1
                    }}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                        flexGrow: 1
                    }}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <button type="submit" style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        flexShrink: 0
                    }}>
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
