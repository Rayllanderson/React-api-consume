export function Card() {
  return (
    <a className="col mb-4 text-decoration-none" data-toggle="modal" data-target="#exampleModal">
      <div className="card h-60">
        <img src="https:\/\/cdn.myanimelist.net\/images\/anime\/1775\/109514.jpg?s=7223653b9c57b539ca603e6881f0b9af" className="card-img-top" alt="..." />
        <div className="text-center p-3">
          <h5 className="card-title">Card title</h5>
        </div>
        <div className="card-footer">
          <p><i className="fas fa-star"></i> 8.45</p>
          <p className="float-right"><i className="fas fa-play"></i> Episódios: 16 </p>
        </div>
      </div>
    </a>
  );
}