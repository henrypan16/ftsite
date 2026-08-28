import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="flex flex-1 items-center py-6">
			<section className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[1.1fr_.9fr] xl:items-center">
				<div className="max-w-2xl">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">
						About Fillware
					</p>

					<h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-brand-800 2xl:text-6xl">
						Technology built around
						<span className="block text-brand-500">
							your pharmacy.
						</span>
					</h1>

					<p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
						Since 2005, Fillware Technologies has been building
						reliable, customized pharmacy software designed around
						the way your business actually works.
					</p>

					<p className="mt-4 max-w-xl leading-7 text-slate-500">
						We combine pharmacy industry knowledge, strategic
						planning, and practical software development to help
						pharmacies streamline operations, improve productivity,
						and grow with confidence.
					</p>

					<div className="mt-8 flex items-center gap-4">
						<Link
							href="/contact"
							className="rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700">
							Talk to Our Team
						</Link>

						<Link
							href="/rx"
							className="font-medium text-brand-600 transition hover:text-brand-800">
							Explore Fillware RX →
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<InfoCard number="20+" title="Years of Experience">
						Pharmacy-focused technology since 2005.
					</InfoCard>

					<InfoCard number="01" title="Built Around You">
						Software adapted to your workflows and business rules.
					</InfoCard>

					<InfoCard number="360°" title="Full Project Support">
						Planning, development, implementation, and ongoing
						support.
					</InfoCard>

					<InfoCard number="∞" title="Designed to Grow">
						Practical, scalable solutions for evolving pharmacy
						needs.
					</InfoCard>
				</div>
			</section>
		</main>
	);
}

function InfoCard({
	number,
	title,
	children,
}: {
	number: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-2xl border border-brand-100 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md">
			<div className="text-3xl font-bold text-brand-500">{number}</div>
			<h2 className="mt-3 font-semibold text-brand-800">{title}</h2>
			<p className="mt-2 text-sm leading-6 text-slate-500">{children}</p>
		</div>
	);
}
