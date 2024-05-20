import CardItem from "./CardItem";
import cardsItems from "./itemsList";

export default function CardList() {
  return (
    <div className="container">
      <div className="row">
        {cardsItems.map((card, index) => (
          <CardItem
            key={index}
            imagePath={card.image}
            title={card.title}
            text={card.description}
          />
        ))}
      </div>
    </div>
  );
}
