
type Props = {
  handleOnChange: (e) => void,
  search: string,
  searchType: string;
}

export function SearchInput({ handleOnChange, search, searchType }: Props) {
  return (
  <input type="text" className="rounded-md py-1 px-3 form-control"
    onChange={handleOnChange}
    value={search} placeholder={`Busque um ${searchType}...`} />)
}