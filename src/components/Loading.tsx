
type Props = {
  loading: boolean;
}
export function Loading({ loading }: Props) {
  return (
    loading ?
      <div className="d-flex justify-content-center mb-3">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      : null
  );
}