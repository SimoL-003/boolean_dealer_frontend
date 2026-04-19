export default function OptionalCard({ name, description }) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col gap-1">
      <p className="font-normal text-text text-md">{name}</p>
      {description && (
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
