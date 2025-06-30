import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar2 from '../components/Navbar2';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            alert(err.message);
        }
    };

    const handleLogout = () => signOut(auth);

    return (
        <div className='pt-12'>
            <div>
                <Navbar2 />
            </div>


            <div className="max-w-md mx-auto  p-6 border mt-10 rounded shadow ">
                {user ? (
                    <div className="text-center">
                        <p className="mb-2 text-lg">Welcome, {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-4"
                        >
                            Logout
                        </button>

                        <button
                            onClick={() => navigate('/writeblog')}
                            className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Write Blog
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleLogin}>
                        <h2 className="text-2xl font-bold mb-4">Login to write BLOGS</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-3 py-2 mb-3 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-3 py-2 mb-4 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
