import Image from "next/image";
import Link from "next/link";
const partners = [
	{
		name: "Allied Pharmacists",
		logo: "/api_logo.svg",
		url: "https://www.alliedpharmacists.com/",
		width: "w-72",
	},
	{
		name: "OnPharm United",
		logo: "/onpharm.png",
		url: "https://www.onpharmunited.ca/",
		width: "w-60",
	},
	{
		name: "Wholehealth Pharmacy",
		logo: "/wholehealth.png",
		url: "https://wholehealthpharmacy.ca/",
		width: "w-52",
	},
	{
		name: "Neighbourhood Pharmacy Association of Canada",
		logo: "/neighborhood.svg",
		url: "https://neighbourhoodpharmacies.ca/",
		width: "w-72",
	},
	{
		name: "Pharmacy Brands Canada",
		logo: "/pharmacybrands.png",
		url: "https://pharmacybrandscanada.com/",
		width: "w-40",
	},
	{
		name: "PharmAssess",
		logo: "/pharmassess.png",
		url: "https://www.pharmassess.ca/",
		width: "w-40",
	},
	{
		name: "Amjay Software",
		logo: "/amjay.png",
		url: "https://amjaysoftware.com/",
		width: "w-40",
	},
	{
		name: "Meds on Wheels",
		logo: "/medsonwheels.webp",
		url: "https://meds-on-wheels.com/",
		width: "w-40",
	},
	{
		name: "McKesson Central Fill",
		logo: "/centralfill.png",
		url: "https://www.mckesson.ca/en-CA/central-fill",
		width: "w-32",
	},
	{
		name: "McKesson Pacmed",
		logo: "/pacmed.png",
		url: "https://www.mckesson.ca/en-CA/pacmed-ns",
		width: "w-32",
	},
	{
		name: "Mapflow",
		logo: "/mapflow.svg",
		url: "https://mapflow.ca/",
		width: "w-40",
	},
	{
		name: "AlertRx",
		logo: "/alertrx.png",
		url: "https://www.alertrx.ca/",
		width: "w-40",
	},
	{
		name: "RxVigilance",
		logo: "/vigilance.svg",
		url: "https://www.vigilance.ca/home",
		width: "w-40",
	},
	{
		name: "ScriptPro",
		logo: "/scriptpro.png",
		url: "https://scriptpro.ca/",
		width: "w-40",
	},
	{
		name: "AutoMed Systems",
		logo: "/automed.png",
		url: "https://automedsystems.com.au/",
		width: "w-40",
	},
	{
		name: "PharmaChoice",
		logo: "/pharmachoice.svg",
		url: "https://www.pharmachoice.com/",
		width: "w-40",
	},
];

export default function PartnersPage() {
	return (
		<main className="flex w-full flex-1 flex-col justify-center py-4">
			{/* Header */}
			<div className="mb-10 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
					Partners & Integrations
				</p>

				<h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-800">
					Better connected.
				</h1>

				<p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
					Working together with trusted pharmacy organizations,
					technology providers, and industry partners.
				</p>
			</div>

			{/* Free-flowing logos */}
			<div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
				{partners.map((partner) => (
					<PartnerLogo key={partner.name} {...partner} />
				))}
			</div>
		</main>
	);
}

function PartnerLogo({
	name,
	logo,
	url,
	width,
}: {
	name: string;
	logo: string;
	url: string;
	width: string;
}) {
	return (
		<Link
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit ${name}`}
			className={`
        group
        relative
        flex
        h-16        
        items-center
        justify-center
        transition-transform
        duration-300
        hover:scale-110
      	${width}`}>
			<Image
				src={logo}
				alt={`${name} logo`}
				fill
				sizes="160px"
				className="
          object-contain
          transition-all
          duration-300
          group-hover:drop-shadow-md
        "
			/>
		</Link>
	);
}
