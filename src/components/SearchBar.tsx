
export function SearchBar() {
  return (
    <div className="input-group input-group-lg mb-3 mt-5">
      <input type="text" className="rounded-md py-1 px-3 form-control" placeholder="Busque um anime" />
      <div className="input-group-append">
        <button type="button" className="btn btn-search"> &nbsp; <i className="fa fa-search"></i> &nbsp;</button>
      </div>
    </div>
  );
}