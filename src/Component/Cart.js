import React from 'react';

const Cart = (props) => {
  const { cart } = props;
  const handleRemoveFromCart = async (id) => {
    await fetch(`http://localhost:5000/removeFromCart?id=${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img
                            src={item.image}
                            alt={item.nom}
                            width="70"
                            className="img-fluid rounded shadow-sm"
                          />
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              {' '}
                              <a href="#" className="text-dark d-inline-block align-middle">
                                {item.nom}
                              </a>
                            </h5>
                            <span className="capitalize text-muted font-weight-normal font-italic d-block">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle">
                        <strong>{item.price}</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong>{item.quantity}</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <button className="text-dark" onClick={() => handleRemoveFromCart(item.id)}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
