"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/rx", label: "RX" },
	{ href: "/pos", label: "POS" },
	{ href: "/features", label: "Features" },
	{ href: "/partners", label: "Partners & Integrations" },
	{ href: "/support", label: "Support" },
	{ href: "/links", label: "Links" },
	{ href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{/* Desktop Navbar */}
			<nav className="z-20 hidden xl:block">
				<div className="flex flex-row items-center justify-between">
					<Link href="/" className="shrink-0">
						<Image
							src="/logo.png"
							alt="Fillware Logo"
							width={150}
							height={150}
							className="mr-8 h-auto w-37.5 object-contain"
							priority
						/>
					</Link>

					<div className="group/nav ml-8 flex w-full items-center">
						{links.map((link) => {
							const isActive =
								link.href === "/"
									? pathname === "/"
									: pathname.startsWith(link.href);

							return (
								<Link
									key={link.href}
									href={link.href}
									className={`
                    relative p-4
                    text-lg font-medium text-brand-600
                    after:absolute
                    after:bottom-2
                    after:left-1/2
                    after:h-0.5
                    after:-translate-x-1/2
                    after:bg-brand-600
                    after:transition-all
                    after:duration-300
                    ${
						isActive
							? `
                          after:w-[calc(100%-2rem)]
                          after:opacity-100
                          group-hover/nav:after:opacity-30
                          hover:after:opacity-100
                        `
							: `
                          after:w-0
                          after:opacity-100
                          hover:after:w-[calc(100%-2rem)]
                        `
					}
                  `}>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>
			</nav>

			{/* Mobile / Tablet Navbar */}
			<nav className="relative z-30 flex h-24 items-center justify-center xl:hidden mb-4 mt-8">
				{/* Menu Button */}
				<button
					type="button"
					onClick={() => setMenuOpen((current) => !current)}
					aria-label="Toggle navigation menu"
					aria-expanded={menuOpen}
					className="
					absolute left-0
					flex h-11 w-11
					items-center justify-center
					rounded-lg
					text-brand-700
					transition
					hover:bg-brand-50
				">
					<div className="relative h-5 w-6">
						<span
							className={`
                absolute left-0 top-0
                h-0.5 w-6
                bg-current
                transition-all duration-300
                ${menuOpen ? "top-2 rotate-45" : ""}
              `}
						/>

						<span
							className={`
                absolute left-0 top-2
                h-0.5 w-6
                bg-current
                transition-all duration-300
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
						/>

						<span
							className={`
                absolute left-0 top-4
                h-0.5 w-6
                bg-current
                transition-all duration-300
                ${menuOpen ? "top-2 -rotate-45" : ""}
              `}
						/>
					</div>
				</button>

				{/* Centered Logo */}
				<Link href="/" onClick={() => setMenuOpen(false)}>
					<Image
						src="/logo.png"
						alt="Fillware Logo"
						width={130}
						height={130}
						className="h-auto w-32"
						priority
					/>
				</Link>

				{/* Mobile Menu */}
				<div
					className={`
            absolute left-0 top-full
            w-full
            overflow-hidden
            rounded-2xl
            bg-white/95
            shadow-xl
            backdrop-blur-md
            transition-all
            duration-300
            ${
				menuOpen
					? "max-h-150 translate-y-0 opacity-100"
					: "pointer-events-none max-h-0 -translate-y-2 opacity-0"
			}
          `}>
					<div className="flex flex-col p-3">
						{links.map((link) => {
							const isActive =
								link.href === "/"
									? pathname === "/"
									: pathname.startsWith(link.href);

							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className={`
                    rounded-lg
                    px-4 py-3
                    text-base font-medium
                    transition
                    ${
						isActive
							? "bg-brand-50 text-brand-700"
							: "text-brand-600 hover:bg-brand-50"
					}
                  `}>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	);
}
