import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


export function ModalAnime() {
  const { selectedAnime } = useContext(SearchContext);
  function convertDate(date: string) {
    if (date) {
      return date.split('T')[0] ? date.split('T')[0] : date;;
    }
  }

  function convertStartDate(date: string) {
    return convertDate(date) ? convertDate(date) : 'Não iniciado'
  }
  function convertEndDate(date: string) {
    return convertDate(date) ? convertDate(date) : 'Não finalizado'
  }

  const quantityDescription = selectedAnime && (selectedAnime.episodes ? `Eps:  ${selectedAnime.episodes}` : `Caps: ${selectedAnime.chapters}`);
  const quantityClassName = selectedAnime && (selectedAnime.episodes ? "fas fa-play" : "fas fa-book");
  return (
    selectedAnime ?
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedAnime.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span style={{ color: 'white' }} aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <img src={selectedAnime.image_url} className="img-thumbnail" />
            </div>
            <div className="modal-infos text-justify pl-3 pr-3 pt-3">
              <p> {selectedAnime.synopsis} </p>
              <p title="Score"><i className="fas fa-star"></i> {selectedAnime.score}</p>
              <p title="Episódios"><i className={quantityClassName}></i> {quantityDescription}</p>
              <p> <i className="fas fa-tv"></i> Tipo: {selectedAnime.type}</p>
              <p> <i className="fas fa-users"></i> Membros: {selectedAnime.members}</p>
              <p><i className="far fa-calendar-alt"></i> Início: {convertStartDate(selectedAnime.start_date)}</p>
              <p><i className="fas fa-calendar-alt"></i> Finalização: {convertEndDate(selectedAnime.end_date)}</p>
            </div>
            <div className="pl-3 pr-3 pb-3 d-flex justify-content-end">
              <a href={selectedAnime.url} target="_blank" style={{ color: 'white' }}> <i className="fas fa-plus-circle fa-2x"></i> </a>
            </div>
          </div>
        </div>
      </div> : <div></div>)
}