import Container from "@/components/ui/Container";

const facts = [
  { value: "2", label: "AI tools shipped to production at OneMetric" },
  { value: "3rd", label: "Pitch Rush 2025, Product Club" },
  { value: "OC", label: "Placement Cell, IIT Jodhpur" },
  { value: "9th / 23", label: "Inter IIT Tech Meet 14.0" },
  { value: "YC S23", label: "Growth intern, Inventive AI" },
];

export default function ProofStrip() {
  return (
    <section aria-label="Highlights" className="border-t border-line">
      <Container>
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label} className="border-line py-6 pr-4 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-mono text-2xl font-medium text-text">{f.value}</dd>
              <dd className="mt-1 text-sm leading-snug text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
