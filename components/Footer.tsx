import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="z-10 mt-auto w-full">
			<div className="py-5">
				<div
					className="
            flex flex-col
            items-center
            justify-center
            gap-4
            text-center
            text-sm
            text-slate-500

            sm:flex-row
            sm:gap-8
            sm:text-left

            xl:gap-60
          ">
					<p className="px-4 sm:px-0">
						Copyright © {new Date().getFullYear()} Fillware
						Technologies. All Rights Reserved.
					</p>

					<div
						className="
              flex
              items-center
              gap-6

              xl:gap-8
            ">
						<Link
							href="https://www.instagram.com/fillware"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="text-slate-400 transition-colors hover:text-brand-600">
							<FaInstagram className="h-6 w-6 xl:h-7.5 xl:w-7.5" />
						</Link>

						<Link
							href="https://www.linkedin.com/company/fillware-technologies"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-slate-400 transition-colors hover:text-brand-600">
							<FaLinkedinIn className="h-6 w-6 xl:h-7.5 xl:w-7.5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
