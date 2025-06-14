(function() {
  const { Card } = antd;

  function DrinkCard({ drink }) {
    return (
      <Card
        hoverable
        className="drink-card"
        cover={<img src={drink.image + '?w=400&h=300&auto=format'} alt={drink.name} />}
      >
        <Card.Meta
          title={drink.name}
          description={
            <>
              <p><strong>Recipe:</strong> {drink.recipe}</p>
              <p><strong>Flavor:</strong> {drink.flavor}</p>
              <p><strong>Strength:</strong> {drink.strength}</p>
              <p><strong>Type:</strong> {drink.type}</p>
            </>
          }
        />
      </Card>
    );
  }

  window.DrinkCard = DrinkCard;
})();
