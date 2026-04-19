import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCarDetails, getImageUrl } from "../services/api";
import IsElectrifiedBadge from "../components/atoms/IsElectrifiedBadge";
import Error from "../components/atoms/Error";
import DetailCard from "../components/atoms/DetailCard";

const NA = <span className="text-text-subtle italic text-sm">N/A</span>;

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const data = await getCarDetails(id);
        setCar(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCarDetails();
  }, [id]);

  return (
    <main className="py-12">
      <div className="container space-y-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-gold transition-colors duration-200"
        >
          ← Back to catalogue
        </Link>

        {/* Skeleton */}
        {loading && (
          <div className="animate-pulse space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-16/10 bg-border rounded-xl" />
              <div className="space-y-4 py-2">
                <div className="h-3 w-20 bg-border rounded" />
                <div className="h-10 w-3/4 bg-border rounded" />
                <div className="h-8 w-32 bg-border rounded" />
                <div className="h-px bg-border my-4" />
                <div className="h-4 w-full bg-border rounded" />
                <div className="h-4 w-5/6 bg-border rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-bg-card border border-border rounded-xl p-5 space-y-2"
                >
                  <div className="h-3 w-16 bg-border rounded" />
                  <div className="h-5 w-20 bg-border rounded" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && <Error />}

        {/* Content */}
        {!loading && !error && car && (
          <div className="space-y-12">
            {/* Hero — image + main info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image */}
              <div className="aspect-16/10 rounded-xl overflow-hidden bg-border">
                <img
                  src={
                    car.image_url
                      ? getImageUrl(car.image_url)
                      : "https://placehold.co/800x500/e2e2dc/8e8e93?text=No+Image"
                  }
                  alt={`${car.car_model.brand.name} ${car.car_model.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main info */}
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold">
                  {car.car_model.brand.name}
                </p>

                <h1 className="font-display text-4xl font-light tracking-tight text-text leading-tight">
                  {car.car_model.name}
                </h1>

                <p className="font-display text-3xl font-semibold text-text tracking-tight">
                  {car.price
                    ? `${Number(car.price).toLocaleString("it-IT")} €`
                    : NA}
                </p>

                <div className="h-px bg-border" />

                {/* Fuel type */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-subtle">
                      Fuel type
                    </span>
                    <span className="text-base font-medium text-text flex gap-4">
                      {car.fuel_type.name}{" "}
                      {car.fuel_type.is_electrified == true && (
                        <IsElectrifiedBadge className="" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Identification data */}
                <div className="bg-bg border border-border rounded-xl p-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-text-subtle mb-1">
                      Chassis
                    </p>
                    <p className="text-sm font-medium text-text font-mono">
                      {car.chassis ?? NA}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-text-subtle mb-1">
                      Plate
                    </p>
                    <p className="text-sm font-medium text-text font-mono tracking-widest">
                      {car.plate ?? NA}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical details */}
            <div className="space-y-5">
              <h2 className="font-display text-2xl font-light text-text tracking-tight">
                Technical details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <DetailCard NA={NA} label="Year" value={car.year} />
                <DetailCard
                  NA={NA}
                  label="Mileage"
                  value={
                    car.km != null
                      ? `${car.km.toLocaleString("it-IT")} km`
                      : null
                  }
                />
                <DetailCard
                  NA={NA}
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

            {/* Optional features */}
            {car.optionals?.length > 0 && (
              <div className="space-y-5">
                <h2 className="font-display text-2xl font-light text-text tracking-tight">
                  Optional features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {car.optionals.map(({ id, name, description }) => (
                    <div
                      key={id}
                      className="bg-bg-card border border-border rounded-xl p-5"
                    >
                      <p className="font-medium text-text text-sm mb-1">
                        {name}
                      </p>
                      {description && (
                        <p className="text-sm text-text-muted leading-relaxed">
                          {description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
