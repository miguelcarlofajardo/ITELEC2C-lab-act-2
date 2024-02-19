import Product from "./Product";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import voucherProducts from "./voucherData";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ProductList() {
  const voucher = voucherProducts;

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">PROMO CODES</h4>
          </div>
          {/* add product here */}
          {voucher.map((voucher) => (
            <Product voucherObj={voucher} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
