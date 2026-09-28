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
		<main className="flex w-full flex-1 items-center py-8 sm:py-10 lg:py-12 xl:py-4">
			<section className="grid w-full min-w-0 grid-cols-1 gap-10 md:gap-12 lg:gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:gap-10">
				{/* Left */}
				<div className="min-w-0">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 sm:text-sm sm:tracking-[0.25em]">
						Fillware Support
					</p>

					<h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-brand-800 sm:text-4xl md:text-5xl xl:text-5xl xl:leading-[1.05]">
						More than support.
						<span className="block text-brand-500">
							A partner in your success.
						</span>
					</h1>

					<p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
						Our commitment continues long after implementation.
						Fillware provides dependable, knowledgeable support to
						help your business operate with confidence.
					</p>

					<p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
						Whether you need help resolving an issue, planning an
						upgrade, or adapting your technology as your pharmacy
						grows, our team is here to help.
					</p>

					{/* Contact and Hours */}
					<div className="mt-7 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
						<Link
							href="/contact"
							className="inline-flex shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700 sm:text-base">
							Contact Support
						</Link>

						<div className="border-l-2 border-brand-300 pl-4 sm:pl-5">
							<p className="mb-2 text-sm font-semibold text-brand-700">
								Support Hours
							</p>

							<div className="grid grid-cols-[76px_1fr] gap-x-3 gap-y-1 text-xs text-slate-500 sm:grid-cols-[80px_1fr] sm:gap-x-4 sm:text-sm">
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
				<div className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-6 min-[400px]:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:gap-x-10 xl:gap-x-8 xl:gap-y-6">
					{supportItems.map((item, index) => (
						<div key={item.title} className="group min-w-0">
							<div className="mb-2 text-xs font-bold tracking-widest text-brand-400">
								{String(index + 1).padStart(2, "0")}
							</div>

							<h2 className="text-base font-semibold leading-snug text-brand-800 sm:text-lg">
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
