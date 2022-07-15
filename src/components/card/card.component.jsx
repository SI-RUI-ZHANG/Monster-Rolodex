import './card.styles.css'

const Card = ({monster}) => {
  const {id, name, email} = monster
  return (
    <div className={'card-container'}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
};

export default Card;

