import Link from "next/link";

const resourceLinks = [
	{
		name: "Ontario College of Pharmacists",
		href: "https://www.ocpinfo.com",
		category: "Regulatory",
	},
	{
		name: "Ontario Pharmacists Association",
		href: "https://www.opatoday.com",
		category: "Pharmacy",
	},
	{
		name: "College of Physicians and Surgeons of Ontario",
		href: "https://www.cpso.on.ca",
		category: "Regulatory",
	},
	{
		name: "Royal College of Dental Surgeons of Ontario",
		href: "https://www.rcdso.org",
		category: "Regulatory",
	},
	{
		name: "McKesson PharmaClik",
		href: "https://pharmaclik-login.mckesson.ca",
		category: "Supplier",
	},
	{
		name: "Kohl & Frisch",
		href: "https://kohlandfrisch.com/",
		category: "Supplier",
	},
	{
		name: "Ontario e-Formulary",
		href: "https://www.formulary.health.gov.on.ca",
		category: "Reference",
	},
	{
		name: "TeamViewer Download",
		href: "https://www.teamviewer.com",
		category: "Support",
	},
	{
		name: "Fillware Quick Support",
		href: "https://get.teamviewer.com",
		category: "Support",
	},
];

export default function LinksPage() {
	return (
		<main className="flex w-full flex-1 flex-col justify-center py-4">
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
					Resources
				</p>

				<h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-800">
					Useful pharmacy links.
				</h1>

				<p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
					Quick access to commonly used regulatory, supplier,
					reference, and remote support resources.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 xl:grid-cols-3">
				{resourceLinks.map((resource) => (
					<Link
						key={resource.name}
						href={resource.href}
						target="_blank"
						rel="noopener noreferrer"
						className="
              group
              flex
              items-center
              justify-between
              border-b
              border-brand-100
              py-4
              transition-colors
              hover:border-brand-400
            ">
						<div>
							<span className="text-xs font-medium uppercase tracking-wider text-brand-400">
								{resource.category}
							</span>

							<h2 className="mt-1 font-medium text-slate-700 transition-colors group-hover:text-brand-600">
								{resource.name}
							</h2>
						</div>

						<span className="ml-4 text-xl text-brand-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600">
							↗
						</span>
					</Link>
				))}
			</div>
		</main>
	);
}
