import CarCard from "../molecules/CarCard";

export default function CarCardsGrid({ cars }) {
  return (
    <>
      {cars.length === 0 ? (
        <p className="text-text-subtle text-center py-24">
          There are no cars available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </>
  );
}
