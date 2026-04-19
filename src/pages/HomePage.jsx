import { useEffect, useState } from "react";
import { getCars, getImageUrl } from "../services/api";
import { Link } from "react-router-dom";

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
        {error && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <span className="text-red-400 text-xl">!</span>
            </div>
            <p className="font-medium text-text mb-1">
              Oh no! An error occurred.
            </p>
            <p className="text-sm text-text-subtle">
              Check your connection or try again later.
            </p>
          </div>
        )}

        {/* SKELETON LOADING */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-16/10 bg-border" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-16 bg-border rounded" />
                  <div className="h-6 w-3/4 bg-border rounded" />
                  <div className="flex gap-4">
                    <div className="h-3 w-12 bg-border rounded" />
                    <div className="h-3 w-12 bg-border rounded" />
                    <div className="h-3 w-12 bg-border rounded" />
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between items-end">
                    <div className="h-7 w-24 bg-border rounded" />
                    <div className="h-3 w-16 bg-border rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CARS GRID */}
        {!loading && !error && (
          <>
            {cars.length === 0 ? (
              <p className="text-text-subtle text-center py-24">
                Nessuna auto disponibile al momento.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <Link
                    key={car.id}
                    to={`/cars/${car.id}`}
                    className="bg-bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gold block"
                  >
                    {/* IMAGE */}
                    <div className="aspect-16/10 overflow-hidden bg-border relative">
                      <img
                        src={
                          car.image_url
                            ? getImageUrl(car.image_url)
                            : "https://placehold.co/600x375/e2e2dc/8e8e93?text=No+Image"
                        }
                        alt={`${car.car_model.brand.name} ${car.car_model.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* CARD BODY */}
                    <div className="p-5">
                      {/* Brand */}
                      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-1">
                        {car.car_model.brand.name}
                      </p>

                      {/* Model */}
                      <h4 className="font-display text-xl font-medium text-text tracking-tight leading-tight mb-4">
                        {car.car_model.name}
                      </h4>

                      {/* Specs */}
                      <div className="flex gap-5 mb-5">
                        <div className="flex flex-col gap-px">
                          <span className="text-[11px] text-text-subtle uppercase tracking-wide">
                            Year
                          </span>
                          <span className="text-[13px] font-medium text-text-muted">
                            {car.year}
                          </span>
                        </div>
                        <div className="flex flex-col gap-px">
                          <span className="text-[11px] text-text-subtle uppercase tracking-wide">
                            Km
                          </span>
                          <span className="text-[13px] font-medium text-text-muted">
                            {car.km.toLocaleString("it-IT")}
                          </span>
                        </div>
                      </div>

                      {/* CARD FOOTER */}
                      <div className="flex items-end justify-between pt-4 border-t border-border">
                        <p className="font-display text-2xl font-semibold text-text tracking-tight">
                          {Number(car.price).toLocaleString("it-IT")} €
                        </p>
                        <span className="text-[11px] tracking-[0.12em] uppercase text-gold font-medium transition-colors duration-250 group-hover:text-gold-dark">
                          Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
