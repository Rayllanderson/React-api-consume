export function Modal() {
  return (<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span style={{ color: 'white' }} aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <img src="https:\/\/cdn.myanimelist.net\/images\/anime\/1775\/109514.jpg?s=7223653b9c57b539ca603e6881f0b9af" className="img-thumbnail" />
        </div>
        <div className="modal-infos text-justify pl-3 pr-3 pt-3">
          <p> Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout...</p>
          <p><i className="fas fa-star"></i> 8.45</p>
          <p><i className="fas fa-play"></i> 16 eps</p>
          <p> <i className="fas fa-tv"></i> Tipo: Anime</p>
          <p> <i className="fas fa-users"></i> Membros: 222546</p>
          <p><i className="far fa-calendar-alt"></i> Início: 2016-07-23</p>
          <p><i className="fas fa-calendar-alt"></i> Finalização: 2016-07-23</p>
        </div>
        <div className="pl-3 pr-3 pb-3 d-flex justify-content-end">
          <a style={{ color: 'white' }}> <i className="fas fa-plus-circle fa-2x"></i> </a>
        </div>
      </div>
    </div>
  </div>)
}