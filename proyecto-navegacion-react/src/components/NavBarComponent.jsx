import { NavLink } from 'react-router-dom';

export const NavBarComponent = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
