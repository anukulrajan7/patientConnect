import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    const responseGoogle = (response) => {
        // Handle Google login response
        console.log(response);
    };

    return (
        <div 
            className="h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url('/public/background1.jpg')`, // Specify the path to your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-md w-full p-4 border rounded-md shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Login
                    </button>
                </form>
                <div className="mt-4 flex justify-center">
                    <GoogleLogin
                        clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className="mt-4 text-center">
                    <p> Do not have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;


