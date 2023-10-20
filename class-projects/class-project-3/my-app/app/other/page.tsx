import Link from "next/link";
function Other() {
    return (
        <div>
            <h1>OTHER</h1>
  
            <ul>
                <li>
                <Link href="/other/faq">FAQ</Link>
            </li>
            <li>
                <Link href="/other/contact">Contact us</Link>
            </li>
            <li>
                <Link href="/other/terms">Terms and conditions</Link>
            </li>
            </ul>
        </div>
    );
}

export default Other;