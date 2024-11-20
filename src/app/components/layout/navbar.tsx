import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav
            className="flex justify-center items-end space-x-12 p-3 bg-gray-50 shadow-md"
            aria-label="Site navigation"
        >
            <Link
                href="/"
                className="text-lg font-medium text-black hover:text-red-800"
            >
                Recipes
            </Link>
            <Image
                src="/logo.svg"
                alt="Spice Codex logo"
                width={180}
                height={180}
                priority
            />
            <Link
                href="/create-new"
                className="text-lg font-medium text-black hover:text-red-800"
            >
                Create New
            </Link>
        </nav>
    );
}