const CardsView = ({ cards }) => {

  const ShopCard = (cards) => {
    return cards.map(({ name, color, img, price }, i) => {
      return (
        <div className="shop-card" key={`card-${i}`} style={{backgroundImage: `url( ${img} )`}}>
            
          <div className="title">
           {name}
         </div>
         <div className="info">
           {color}
         </div>

         <div className="basement">
           <div className="price">${price}</div>
           <button className="btn">
             Add to cart
          </button>
         </div>
      </div>
      );
    });
  };


  return (
    <div className="module">
      {ShopCard(cards)}
    </div>
  );
};


export { CardsView }