export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
        <span className="text-red-400 text-xl">!</span>
      </div>
      <p className="font-medium text-text mb-1">Oh no! An error occurred.</p>
      <p className="text-sm text-text-subtle">
        Check your connection or try again later.
      </p>
    </div>
  );
}
