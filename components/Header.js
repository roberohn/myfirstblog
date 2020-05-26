import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header class="header container">
                <nav class="nav">
                    <Link href="/">
                        <a class="nav-link">Home</a>
                    </Link>
                    {/* <Link href="/about">
                        <a class="nav-link">About</a>
                    </Link> */}
                </nav>
            </header>
        </>
    )
}