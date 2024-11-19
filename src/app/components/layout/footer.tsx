// Write a footer for the spice codex webpage complete with styling
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-8 bg-gray-50">
            <div className="flex justify-center items-center space-x-14">
                <Image src="/logo.svg" alt="spice codex logo" width={130} height={100} />
                <div className="flex flex-col items-start max-w-sm text-sm">
                    <h2 className="underline">About Us</h2>
                    <p>
                        Spice Codex is a recipe tracker app that helps you manage your favorite recipes.
                    </p>
                </div>
            </div>
            <p className="mt-8 text-xs">&copy; 2024 Spice Codex. All rights reserved.</p>
        </footer>
    );
}