const Container = () => {
  return (
    <>
      <div className="main">
        <div className="slider">
          <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" />
        </div>
        <div className="list">
          <h4>Innovation and experience design agency</h4>
          <p>
            Apps is an innovation and experience design agency. We exist to
            create a better future with you
          </p>
          <button>Products</button>
        </div>
        <div className="article">
          <div className="image">
            <img src="https://picsum.photos/seed/picsum/400" />
          </div>
          <div className="desc">
            <h4>The imaginative application aof the art and science</h4>
            <p>
              we architect, design and delivr iconic experiences servicesand
              product that improve people's lives
            </p>
            <button>Read latest</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Container;
