import DetailCard from "../atoms/DetailCard";

export default function TechnlicalDetailsSection({ car }) {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl font-light text-text tracking-tight">
        Technical details
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <DetailCard label="Year" value={car.year} />
        <DetailCard
          label="Mileage"
          value={car.km != null ? `${car.km.toLocaleString("it-IT")} km` : null}
        />
        <DetailCard
          label="Previous owners"
          value={
            car.previous_owners != null
              ? car.previous_owners === 0
                ? "First registration"
                : car.previous_owners
              : null
          }
        />
      </div>
    </div>
  );
}
