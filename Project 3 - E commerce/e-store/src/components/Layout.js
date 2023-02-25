import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { HomeIcon, CartIcon } from './icons';
import Search from './Search';

const Layout = ({ categories }) => {

    const renderCategories = () => {
        return categories.data.map((d) => {
            return <li key={d.id}><Link to={`categories/${d.id}`}>{d.title}</Link></li>;
        })
    }

    return (
        <>
            <header>

                <div id="headerHomeIcon">
                    <Link to='/'><HomeIcon width={20} /></Link>
                </div>
                <Search />
                <div id="headerTitle">
                    My store
                </div>
                <div id="headerCartIcon">
                    <Link to='/basket' ><CartIcon width={20} /></Link>
                </div>
            </header>

            <section>
                <nav>
                    {categories.error && (<div> Error: {categories.error}</div>)}
                    <ul>
                        {categories.data && renderCategories()}
                    </ul>
                </nav>
                <main>
                    <Outlet />
                </main>
            </section>

            <footer>
                <Link to="/">Home</Link> | <Link to="/basket">Basket</Link>
            </footer>
        </>
    )
}

export default Layout