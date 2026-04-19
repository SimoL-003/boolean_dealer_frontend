import OptionalCard from "../atoms/OptionalCard";

export default function OptionalSection({ car }) {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl font-light text-text tracking-tight">
        Optional features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {car.optionals.map(({ id, name, description }) => (
          <OptionalCard key={id} name={name} description={description} />
        ))}
      </div>
    </div>
  );
}
