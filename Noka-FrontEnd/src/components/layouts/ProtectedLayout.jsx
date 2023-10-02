import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import logo_light from '../../assets/img/Logo_fondo_claro.png';

export default function DefaultLayout() {
	const { user, setUser } = useAuth();

	// check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, [setUser]);

	// if user is not logged in, redirect to login page
	if (!user) {
		return <Navigate to="/login" />;
	}

	// logout user
	const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/login';
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
            <nav style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.625rem 1rem', backgroundColor: 'darkgray' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto' }}>
                <Link to="https://dcodemania.com/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{width: '150px' }}src={logo_light} alt="Logo NOKA"/>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.5rem',
                        marginLeft: '0.75rem',
                        fontSize: '0.875rem',
                        color: '#4a5568',
                        borderRadius: '0.375rem',
                        backgroundColor: 'transparent',
                        border: '1px solid #cbd5e0',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s, color 0.2s',
                        outline: 'none',
                    }}
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
                <div style={{ display: 'none', width: '100%', flexWrap: 'wrap', alignItems: 'center' }} id="navbar-default">
                    <ul style={{ display: 'flex', flexDirection: 'column', padding: '1rem', marginTop: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'lightgray', position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
                        <li>
                            <NavLink
                                to="/profile"
                                style={{
                                    display: 'block',
                                    padding: '0.5rem 0.75rem',
                                    margin: '0.25rem 0',
                                    borderRadius: '0.375rem',
                                    textDecoration: 'none',
                                    color: 'white',
                                    backgroundColor: 'blue',
                                }}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                style={{
                                    display: 'block',
                                    padding: '0.5rem 0.75rem',
                                    margin: '0.25rem 0',
                                    borderRadius: '0.375rem',
                                    textDecoration: 'none',
                                    color: 'white',
                                    backgroundColor: 'blue',
                                }}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <Link
                                onClick={handleLogout}
                                href="#"
                                style={{
                                    display: 'block',
                                    padding: '0.5rem 0.75rem',
                                    margin: '0.25rem 0',
                                    borderRadius: '0.375rem',
                                    textDecoration: 'none',
                                    color: '#4a5568',
                                    backgroundColor: 'transparent',
                                    transition: 'background-color 0.2s, color 0.2s',
                                }}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '2.5rem' }}>
            <Outlet />
        </main>
		</>
	);
}