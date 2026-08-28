import Link from "next/link";

export default function ContactPage() {
	return (
		<main className="flex w-full flex-1 items-center py-4">
			<section className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
				{/* LEFT */}
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
						Contact Us
					</p>

					<h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-800">
						Have questions?
						<span className="block text-brand-500">
							We&apos;re here to help.
						</span>
					</h1>

					<div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
						<ContactItem title="Office">
							<p>Fillware Technologies Inc.</p>
							<p>6375 Dixie Road, Suite 302</p>
							<p>Mississauga, Ontario L5T 2E7</p>
						</ContactItem>

						<ContactItem title="Phone">
							<p>
								<Link
									href="tel:9055640501"
									className="hover:text-brand-600">
									(905) 564-0501
								</Link>
							</p>

							<p>
								Toll Free:{" "}
								<Link
									href="tel:18667646443"
									className="hover:text-brand-600">
									(866) 764-6443
								</Link>
							</p>

							<p>Fax: (905) 564-9056</p>
						</ContactItem>

						<ContactItem title="Email">
							<p>
								General:{" "}
								<Link
									href="mailto:info@fillware.com"
									className="text-brand-600 hover:text-brand-800">
									info@fillware.com
								</Link>
							</p>

							<p>
								Sales:{" "}
								<Link
									href="mailto:sales@fillware.com"
									className="text-brand-600 hover:text-brand-800">
									sales@fillware.com
								</Link>
							</p>

							<p>
								Support:{" "}
								<Link
									href="mailto:support@fillware.com"
									className="text-brand-600 hover:text-brand-800">
									support@fillware.com
								</Link>
							</p>
						</ContactItem>

						<ContactItem title="Working Hours">
							<div className="grid grid-cols-[90px_1fr] gap-y-1">
								<span>Mon – Fri</span>
								<span>8:30 AM – 9:00 PM</span>

								<span>Saturday</span>
								<span>8:30 AM – 5:30 PM</span>

								<span>Sunday</span>
								<span>9:00 AM – 5:00 PM</span>
							</div>
						</ContactItem>
					</div>

					{/* Map */}
					<div className="mt-5 overflow-hidden rounded-2xl border border-brand-100">
						<iframe
							src="https://www.google.com/maps?q=6375+Dixie+Road+Mississauga+Ontario+L5T+2E7&output=embed"
							width="100%"
							height="200"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="border-0"
							title="Fillware Technologies Location"
						/>
					</div>
				</div>

				{/* RIGHT - COMPACT FORM */}
				<div className="rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur-sm">
					<div className="mb-4">
						<h2 className="text-xl font-semibold text-brand-800">
							Send us a message
						</h2>

						<p className="mt-1 text-sm text-slate-500">
							Tell us how we can help.
						</p>
					</div>

					<form className="grid grid-cols-2 gap-3">
						<Input label="First Name" name="firstName" />
						<Input label="Last Name" name="lastName" />

						<Input label="Email" name="email" type="email" />

						<Input label="Phone" name="phone" type="tel" />

						<div className="col-span-2">
							<label
								htmlFor="subject"
								className="mb-1 block text-sm font-medium text-slate-600">
								Subject
							</label>

							<input
								id="subject"
								name="subject"
								type="text"
								className="
                  w-full
                  rounded-lg
                  border
                  border-brand-100
                  bg-white/80
                  px-3
                  py-2
                  text-sm
                  outline-none
                  transition
                  focus:border-brand-400
                  focus:ring-2
                  focus:ring-brand-100
                "
							/>
						</div>

						<div className="col-span-2">
							<label
								htmlFor="message"
								className="mb-1 block text-sm font-medium text-slate-600">
								Message
							</label>

							<textarea
								id="message"
								name="message"
								rows={4}
								className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-brand-100
                  bg-white/80
                  px-3
                  py-2
                  text-sm
                  outline-none
                  transition
                  focus:border-brand-400
                  focus:ring-2
                  focus:ring-brand-100
                "
							/>
						</div>

						<div className="col-span-2 flex justify-end pt-1">
							<button
								type="submit"
								className="
                  rounded-lg
                  bg-brand-600
                  px-6
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-brand-700
                ">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}

function ContactItem({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h2 className="mb-1 font-semibold text-brand-700">{title}</h2>

			<div className="leading-5 text-slate-500">{children}</div>
		</div>
	);
}

function Input({
	label,
	name,
	type = "text",
}: {
	label: string;
	name: string;
	type?: string;
}) {
	return (
		<div>
			<label
				htmlFor={name}
				className="mb-1 block text-sm font-medium text-slate-600">
				{label}
			</label>

			<input
				id={name}
				name={name}
				type={type}
				className="
          w-full
          rounded-lg
          border
          border-brand-100
          bg-white/80
          px-3
          py-2
          text-sm
          outline-none
          transition
          focus:border-brand-400
          focus:ring-2
          focus:ring-brand-100
        "
			/>
		</div>
	);
}
