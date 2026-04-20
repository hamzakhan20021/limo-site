export default function Home() {
  const fleet = [
    {
      name: "Executive Limousine Services",
      desc: "Perfect for airport transfers, business travel, and private city rides.",
      image:
        "https://images.pexels.com/photos/5880098/pexels-photo-5880098.jpeg",
    },
    {
      name: "Stretch Limousine",
      desc: "Spacious, elegant, and ideal for families, events, and VIP guests.",
      image:
        "https://media.gettyimages.com/id/172664312/photo/limo-side-view.jpg?s=612x612&w=0&k=20&c=0tr6s-CDDoLfxREU-3u-IcXPFdpNoUEXuklmeFxbhzE=",
    },
    {
      name: "Party Limousine",
      desc: "A premium option for larger groups, corporate teams, and special occasions.",
      image:
        "https://media.gettyimages.com/id/130406857/photo/women-in-bunny-ears-drinking-champagne-in-limo.jpg?s=612x612&w=0&k=20&c=V2ZU11C-D6cBWlDL3onuAT2JyQbcft4PweqWkodgD-k=",
    },
  ];

  const services = [
    "Airport Transfers",
    "Corporate Travel",
    "Wedding & Event Transportation",
    "Hourly Chauffeur Service",
    "City-to-City Rides",
    "VIP Executive Travel",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-semibold tracking-[0.2em] text-[#d7b06a]">
              LUXRIDE
            </p>
            <p className="text-xs text-white/50">
              Limo Rental & Chauffeur Service
            </p>
          </div>

          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="#home" className="transition hover:text-[#d7b06a]">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#d7b06a]">
              Services
            </a>
            <a href="#fleet" className="transition hover:text-[#d7b06a]">
              Fleet
            </a>
            <a href="#contact" className="transition hover:text-[#d7b06a]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#d7b06a] px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-[#d7b06a]/30 bg-[#d7b06a]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#d7b06a]">
            Premium Limo Rental
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            Luxury rides for airport transfers, events, and executive travel.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
            Travel in comfort with professional chauffeurs, premium vehicles,
            and a smooth booking experience tailored for business and personal
            occasions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#d7b06a] px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              Reserve Your Ride
            </a>

            <a
              href="#fleet"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-[#d7b06a] hover:text-[#d7b06a]"
            >
              View Fleet
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["24/7", "Availability"],
              ["VIP", "Service"],
              ["Luxury", "Fleet"],
              ["Professional", "Chauffeurs"],
            ].map(([title, label]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-lg font-semibold text-[#d7b06a]">{title}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[#d7b06a]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] shadow-2xl">
            <img
              src="https://images.pexels.com/photos/9151813/pexels-photo-9151813.jpeg?cs=srgb&dl=pexels-brennan-tolman-250017-9151813.jpg&fm=jpg"
              alt="Luxury limousine"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-[#d7b06a]">
                  Elite Chauffeur Experience
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Reliable transport for airport pickups, weddings, business
                  meetings, nights out, and special events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d7b06a]">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Luxury transportation made simple
          </h2>
          <p className="mt-4 text-white/70">
            Whether you need a sleek sedan for a business meeting or a spacious
            sprinter for a group event, we provide dependable luxury
            transportation with attention to every detail.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#d7b06a]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-[#d7b06a]/15" />
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Premium service, punctual arrival, and a polished experience
                from booking to drop-off.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d7b06a]">
              Our Fleet
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Choose the right ride for any occasion
            </h2>
          </div>
          <p className="max-w-xl text-white/65">
            Modern, spotless, and chauffeur-driven vehicles designed for
            comfort, professionalism, and style.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] shadow-xl"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {car.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex rounded-full border border-[#d7b06a]/40 px-4 py-2 text-sm text-[#d7b06a] transition hover:bg-[#d7b06a] hover:text-black"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#151518] to-[#101011] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7b06a]">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Professional service with a luxury touch
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "On-time pickups and drop-offs",
                "Elegant vehicles for every need",
                "Experienced professional chauffeurs",
                "Simple reservations and responsive support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#111114] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d7b06a]">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Book your luxury ride today
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Reach out for pricing, availability, airport transfers, weddings,
              events, or corporate transportation. We’ll help you find the
              perfect vehicle for your trip.
            </p>

            <div className="mt-8 space-y-4 text-white/75">
              <div>
                <p className="text-sm text-white/50">Phone</p>
                <p className="text-lg font-medium">(555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-white/50">Email</p>
                <p className="text-lg font-medium">bookings@luxride.com</p>
              </div>
              <div>
                <p className="text-sm text-white/50">Service Area</p>
                <p className="text-lg font-medium">
                  Airport, Downtown, Corporate, Events & Long Distance
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#d7b06a]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#d7b06a]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#d7b06a]"
              />
              <input
                type="text"
                placeholder="Service Needed"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#d7b06a]"
              />
            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your trip, pickup location, date, and special requests"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#d7b06a]"
            />

            <button
              type="button"
              className="w-full rounded-2xl bg-[#d7b06a] px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}