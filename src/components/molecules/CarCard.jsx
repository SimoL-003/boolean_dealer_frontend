import { Link } from "react-router-dom";
import { getImageUrl } from "../../services/api";

export default function CarCard({ car }) {
  return (
    <Link
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

        {/* Footer */}
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
  );
}
