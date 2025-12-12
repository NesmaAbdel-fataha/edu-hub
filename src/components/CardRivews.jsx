function CardRivews({ desc, img, Name, jobTitle }) {
  return (
    <div className="card h-100">
      <div className="card-body text-center">
        <div className="mb-2 text-warning">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <p className="card-text">{desc}</p>
      </div>

      <div className="card-footer d-flex flex-column align-items-center">
        <img src={img} alt="img" className="rounded-circle mb-2" width="60" height="60" />
        <h5 className="mb-0 text-primary">{Name}</h5>
        <small className="text-muted">{jobTitle}</small>
      </div>
    </div>
  );
}

export default CardRivews;
