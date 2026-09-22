import Link from "next/link";

const supportItems = [
	{
		title: "Help Desk",
		description:
			"Responsive assistance from professionals who understand your systems.",
	},
	{
		title: "Software & Hardware",
		description:
			"Support for the technology that keeps your pharmacy operating.",
	},
	{
		title: "Installation",
		description:
			"Professional setup and implementation for new and existing systems.",
	},
	{
		title: "Training",
		description:
			"Practical guidance to help your team get the most from Fillware.",
	},
	{
		title: "Upgrades",
		description:
			"Technology updates designed to keep your systems current.",
	},
	{
		title: "Data Conversion",
		description:
			"Assistance moving important pharmacy data into your Fillware environment.",
	},
];

export default function SupportPage() {
	return (
		<main className="flex w-full flex-1 items-center py-4">
			<section className="grid w-full grid-cols-1 gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
				{/* Left */}
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
						Fillware Support
					</p>

					<h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-brand-800">
						More than support.
						<span className="block text-brand-500">
							A partner in your success.
						</span>
					</h1>

					<p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
						Our commitment continues long after implementation.
						Fillware provides dependable, knowledgeable support to
						help your business operate with confidence.
					</p>

					<p className="mt-3 max-w-xl leading-7 text-slate-500">
						Whether you need help resolving an issue, planning an
						upgrade, or adapting your technology as your pharmacy
						grows, our team is here to help.
					</p>

					<div className="mt-7 flex items-center gap-8 sm:flex-row flex-col">
						{/* Contact Button */}
						<Link
							href="/contact"
							className="
						rounded-xl
						bg-brand-600
						px-6
						py-3
						font-medium
						text-white
						transition
						hover:bg-brand-700
						">
							Contact Support
						</Link>

						{/* Support Hours */}
						<div className="border-l-2 border-brand-300 pl-5">
							<p className="mb-1 text-sm font-semibold text-brand-700">
								Support Hours
							</p>

							<div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-0.5 text-sm text-slate-500">
								<span>Mon – Fri</span>
								<span>8:30 AM – 9:00 PM</span>

								<span>Saturday</span>
								<span>8:30 AM – 5:30 PM</span>

								<span>Sunday</span>
								<span>9:00 AM – 5:00 PM</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-6">
					{supportItems.map((item, index) => (
						<div key={item.title} className="group">
							<div className="mb-2 text-xs font-bold tracking-widest text-brand-400">
								0{index + 1}
							</div>

							<h2 className="text-lg font-semibold text-brand-800">
								{item.title}
							</h2>

							<p className="mt-1 text-sm leading-6 text-slate-500">
								{item.description}
							</p>

							<div className="mt-3 h-0.5 w-8 bg-brand-200 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-500" />
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
