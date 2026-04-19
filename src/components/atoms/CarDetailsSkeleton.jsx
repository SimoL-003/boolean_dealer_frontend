export default function CarDetailsSkeleton() {
  return (
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
  );
}
