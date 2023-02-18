import logo from '../globe.svg'

export default function Header() {
    return (
        <header className="Header">
            <img src={logo} alt="Globe icon" />
            <h1>My Travel Journal.</h1>
        </header>
    )
}
