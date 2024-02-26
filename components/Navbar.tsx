import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="sticky top-0 z-50 grid h-14 grid-cols-[1fr_auto] items-center gap-4 border-b bg-[#151718] px-4 border-[#3a3f42]">
                <div className="flex">
                    <Link href="/" className="cursor-pointer">
                        nav
                    </Link>
                </div>
                <div className="grid grid-flow-col items-center gap-2">
                    <Link href="/about" className="flex cursor-pointer">
                        About
                    </Link>
                    <Link href="/contact" className="flex cursor-pointer">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
