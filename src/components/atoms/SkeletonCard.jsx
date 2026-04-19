export default function SkeletonCard() {
  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden animate-pulse">
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
  );
}
