import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Cartwidget } from '../Cartwidget/Cartwidget'

// import 
const NavBar = ({ componente }) => {
  // console.log(children)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <NavLink className={({isActive})=> isActive ? 'btn btn-primary': 'btn btn-outline-primary' } to="/">Home</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <NavLink className='btn btn-outline-primary' to="/category/monitores de estudio">Monitores</NavLink>
              <NavLink className='btn btn-outline-primary' to="/category/subwoofer">Subwoofers</NavLink>
              <NavLink className='btn btn-outline-primary' to="/category/home theater">Home Theater</NavLink>
              
              </Nav>
              <Nav>
              
                <NavLink className='btn btn-outline-primary' to='/cart'>
                  <Cartwidget />
                </NavLink>
              </Nav>
          </Navbar.Collapse>
          </Container>
          
        
      </Navbar>

      
    </>
  )
}

export default NavBar