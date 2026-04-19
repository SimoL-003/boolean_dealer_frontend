import { useEffect, useState } from "react";
import { getCars } from "../services/api";
import SkeletonCard from "../components/atoms/SkeletonCard";
import CarCardsGrid from "../components/organisms/CarCardsGrid";

export default function HomePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars();
        setCars(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <main className="py-12">
      <div className="container">
        {/* Header sezione */}
        <div className="mb-10">
          <h1 className="font-display text-4xl font-light tracking-tight text-text leading-tight">
            Our Catalogue
          </h1>
          <p className="text-text-muted mt-3 text-base">
            Select a car to discover every details.
          </p>
        </div>

        {/* ERROR */}
        {error && <Error />}

        {/* SKELETON LOADING */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* CARS GRID */}
        {!loading && !error && <CarCardsGrid cars={cars} />}
      </div>
    </main>
  );
}
