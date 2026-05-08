type Props = {
  show: boolean;
};

export const BackendStatusBanner = ({ show }: Props) => {
  if (!show) return null;
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
      Backend is currently unreachable. Some data may be unavailable.
    </div>
  );
};
