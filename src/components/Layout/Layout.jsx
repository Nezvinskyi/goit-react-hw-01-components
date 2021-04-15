import AppBar from '../AppBar/AppBar'
import Container from '../Container/Container'

const Layout = ({ children }) => 
(<>
	<AppBar text='HW-01-Components' />
	<Container>{children}</Container>
	</>
)


export default Layout