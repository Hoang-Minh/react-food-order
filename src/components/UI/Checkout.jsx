import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import Input from "./Input";
import Button from "./Button";
import UserProgressContext from "../../store/UserProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCheckout();
  };

  

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCart}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>
          <Button onClick={handleCloseCart}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
