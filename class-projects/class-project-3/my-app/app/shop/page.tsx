import Link from "next/link";
function Shop() {
    return (
        <div>
            <h1>SHOP</h1>
  
            <ul>
                <li>
                <Link href="/shop/necklaces">Necklaces</Link>
            </li>
            <li>
                <Link href="/shop/bracelets">Bracelets</Link>
            </li>
            <li>
                <Link href="/shop/rings">Rings</Link>
            </li>
            </ul>
        </div>
    );
}

export default Shop;