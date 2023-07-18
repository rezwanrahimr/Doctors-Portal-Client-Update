const InfoCard = ({ card }) => {
  const { id, name, description, icon, color } = card;
  return (
    <div
      className={`card card-side ${color} shadow-xl items-center p-5 ${
        (id == 1) | (id == 3)
          ? "bg-gradient-to-r from-primary to-secondary"
          : " "
      }`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body card-actions justify-end text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
