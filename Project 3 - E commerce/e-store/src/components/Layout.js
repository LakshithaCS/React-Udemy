import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Layout = ({ categories }) => {

    const renderCategories = () => {
        return categories.data.map((d) => {
            return <li key={d.id}><Link to={`categories/${d.id}`}>{d.title}</Link></li>;
        })
    }

    return (
        <>
            <header>
                My store
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