const ListView = ({ items }) => {

  const ShopItem = (items) => {
    return items.map(({ name, color, img, price }, i) => {
      return (
        <div className="shop-item" key={`card-${i}`} >
          <div className="picture" style={{ backgroundImage: `url( ${img} )` }}>
          </div>
          <div className="title">
            {name}
          </div>
          <div className="infoList">
            {color}
          </div>
          <div className="price">${price}</div>
          <button className="btn">
            Add to cart
          </button>
        </div>
      );
    });
  };

  return (
    <ul className="list">
      {ShopItem(items)}
    </ul>
  );
};

export { ListView }