
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <footer>
                <h5> this is footer vrummmm vrummmm</h5>
            </footer>
        </>
    )
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }
