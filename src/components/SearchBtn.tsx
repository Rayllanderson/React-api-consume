type Props = {
  consumeApi: () => void;
}

export function SearchBtn({ consumeApi }: Props) {
  return (
    <button type="button" className="btn btn-p btn-search"
      onClick={consumeApi}> &nbsp; <i className="fa fa-search"></i> &nbsp;</button>
  )
}