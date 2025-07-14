import { Link } from "react-router-dom";

const Products = ({ setApi }) => {
  async function searchApi(value) {
    const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
    const products = await response.json();
    const filterProducts = products.categories.find((category) => category.category_name.toLowerCase() === value.toLowerCase());
    setApi(filterProducts.category_products); // lifting state up
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" onClick={() => searchApi("Men")} to="/men"> Mens </Link>
              <Link className="nav-link" onClick={() => searchApi("Women")} to="/women"> Women </Link>
              <Link className="nav-link" onClick={() => searchApi("Kids")} to="/kid" >Kids</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Products;
