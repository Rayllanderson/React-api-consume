import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


export function Modal() {
  const { selectedAnime } = useContext(SearchContext);
  function convertDate(date: string) {
    if (date) {
      return date.split('T')[0] ? date.split('T')[0] : date; ;
    }
  }

  function convertEndDate(date: string){
    return convertDate(date) ? convertDate(date) : 'Não finalizado'
  }
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
              <p><i className="fas fa-star"></i> {selectedAnime.score}</p>
              <p><i className="fas fa-play"></i> {selectedAnime.episodes}</p>
              <p> <i className="fas fa-tv"></i> Tipo: {selectedAnime.type}</p>
              <p> <i className="fas fa-users"></i> Membros: {selectedAnime.members}</p>
              <p><i className="far fa-calendar-alt"></i> Início: {convertDate(selectedAnime.start_date)}</p>
              <p><i className="fas fa-calendar-alt"></i> Finalização: {convertEndDate(selectedAnime.end_date)}</p>
            </div>
            <div className="pl-3 pr-3 pb-3 d-flex justify-content-end">
              <a href={selectedAnime.url} target="_blank" style={{ color: 'white' }}> <i className="fas fa-plus-circle fa-2x"></i> </a>
            </div>
          </div>
        </div>
      </div> : <div></div>)
}