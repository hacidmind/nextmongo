
import Link from 'next/link';


const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
            <Link href="/">
            <a className="navbar-brand">Navbar</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link href='/'>
                    <a className="nav-link active" aria-current="page">Home</a>
                    </Link>
                    <Link href='/new'>
                    <a className="nav-link">Create Note</a>
                    </Link>
                    <Link href='/'>
                    <a className="nav-link">Pricing</a>
                    </Link>
                </div>
            </div>
        </div>
</nav >

)

export default Navbar