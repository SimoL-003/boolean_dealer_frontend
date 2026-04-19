import NotAvailable from "./NotAvailable";

export default function DetailCard({ label, value, name }) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col gap-1">
      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-subtle">
        {label}
      </span>
      <span className="text-base font-medium text-text">
        {value ?? <NotAvailable />}
      </span>
      <p>{name}</p>
    </div>
  );
}
