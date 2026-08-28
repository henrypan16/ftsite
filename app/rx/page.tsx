import Link from "next/link";

const features = [
	{
		title: "Smarter Workflows",
		text: "Simplify everyday pharmacy operations and reduce repetitive work.",
	},
	{
		title: "Centralized Management",
		text: "Manage prescriptions, patients, billing, inventory, and operations together.",
	},
	{
		title: "Better Productivity",
		text: "Help your team work faster with processes designed around your workflow.",
	},
	{
		title: "Built to Adapt",
		text: "Configure the system around your pharmacy as your needs evolve.",
	},
];

export default function RxPage() {
	return (
		<main className="flex flex-1 items-center py-6">
			<section className="grid w-full grid-cols-1 gap-10 xl:grid-cols-[1fr_1fr] xl:items-center">
				<div>
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">
						Fillware RX Management System
					</p>

					<h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-brand-800 2xl:text-6xl">
						A smarter pharmacy
						<span className="block text-brand-500">
							starts with a smarter workflow.
						</span>
					</h1>

					<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
						A comprehensive pharmacy management platform built
						around your patients, prescriptions, inventory, billing,
						workflow, and daily operations.
					</p>

					<p className="mt-4 max-w-2xl leading-7 text-slate-500">
						Fillware RX works together with Fillware POS, giving
						your pharmacy a connected platform designed around the
						way your business operates.
					</p>

					<div className="mt-8 flex gap-4">
						<Link
							href="/contact"
							className="rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700">
							Request Information
						</Link>

						<Link
							href="/features"
							className="rounded-xl border border-brand-200 bg-white/60 px-6 py-3 font-medium text-brand-700 transition hover:bg-brand-50">
							View Features
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="group rounded-2xl border border-brand-100 bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
							<div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600">
								0{index + 1}
							</div>

							<h2 className="text-lg font-semibold text-brand-800">
								{feature.title}
							</h2>

							<p className="mt-2 text-sm leading-6 text-slate-500">
								{feature.text}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
