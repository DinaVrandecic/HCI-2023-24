import Link from "next/link";
function Cart() {
    return (
        <div>
            <h1>SHOPPING CART</h1>
  
            <ul>
                <li>
                <Link href="/cart/order">Order summary</Link>
            </li>
            <li>
                <Link href="/cart/payment">Payment details</Link>
            </li>
            <li>
                <Link href="/cart/delivery">Delivery details</Link>
            </li>
            </ul>
        </div>
    );
}

export default Cart;