import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCarDetails } from "../services/api";
import IsElectrifiedBadge from "../components/atoms/IsElectrifiedBadge";
import Error from "../components/atoms/Error";
import CarDetailsSkeleton from "../components/atoms/CarDetailsSkeleton";
import CardDetailsSection from "../components/organisms/CarDetailsSection";

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
        {loading && <CarDetailsSkeleton />}

        {/* Error */}
        {error && <Error />}

        {/* Content */}
        {!loading && !error && car && <CardDetailsSection car={car} />}
      </div>
    </main>
  );
}
