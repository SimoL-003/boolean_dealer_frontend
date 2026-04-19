import { getImageUrl } from "../../services/api";
import DetailCard from "../atoms/DetailCard";
import IsElectrifiedBadge from "../atoms/IsElectrifiedBadge";
import NotAvailable from "../atoms/NotAvailable";
import OptionalSection from "../molecules/OptionalsSection";
import TechnlicalDetailsSection from "../molecules/TechnicalDetailsSection";

export default function CardDetailsSection({ car }) {
  return (
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
            {car.price ? (
              `${Number(car.price).toLocaleString("it-IT")} €`
            ) : (
              <NotAvailable />
            )}
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
                {car.chassis ?? <NotAvailable />}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.15em] uppercase text-text-subtle mb-1">
                Plate
              </p>
              <p className="text-sm font-medium text-text font-mono tracking-widest">
                {car.plate ?? <NotAvailable />}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical details */}
      <TechnlicalDetailsSection car={car} />

      {/* Optional features */}
      {car.optionals?.length > 0 && <OptionalSection car={car} />}
    </div>
  );
}
