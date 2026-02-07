import { AnimatedHero } from "@/components/animated-hero";

const features = [
  {
    title: "Instant setup",
    description: "Launch a workspace in minutes with zero configuration.",
  },
  {
    title: "Automated workflows",
    description: "Trigger tasks, alerts, and reporting without manual effort.",
  },
  {
    title: "Team visibility",
    description: "Keep everyone aligned with real-time dashboards.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$19",
    description: "For solo operators",
    perks: ["1 workspace", "Basic analytics", "Email support"],
  },
  {
    name: "Growth",
    price: "$49",
    description: "For growing teams",
    perks: ["5 workspaces", "Automation rules", "Priority support"],
  },
  {
    name: "Scale",
    price: "$99",
    description: "For scaling ops",
    perks: ["Unlimited workspaces", "Advanced insights", "Dedicated success"],
  },
];

const testimonials = [
  {
    name: "Nora V.",
    role: "Ops Lead",
    quote: "We cut reporting time by 60% in week one.",
  },
  {
    name: "David M.",
    role: "Founder",
    quote: "Everything we needed in one calm, focused dashboard.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <AnimatedHero
          title="Ondra Test"
          subtitle="A dummy SaaS landing page redesigned with VengeanceUI-inspired motion."
        />

        <section className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Simple plans that scale with you
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-white/60">{plan.description}</p>
                <h3 className="mt-2 text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-4xl font-semibold">
                  {plan.price}
                  <span className="text-sm font-normal text-white/60">/mo</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {plan.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40">
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-white/70">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-white/50">{item.role}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-10 text-center">
          <h2 className="text-3xl font-semibold">Ready to streamline your day?</h2>
          <p className="mt-3 text-sm text-white/70">
            Start your free trial today. No credit card required.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900">
            Get started
          </button>
        </section>
      </div>
    </div>
  );
}
