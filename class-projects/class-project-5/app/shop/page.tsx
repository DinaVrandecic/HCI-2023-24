// import Link from "next/link";

// const posts = [12, 3, 56, 7, 89];

// function Shop() {
//     return (
//         // <div>
//         //     <h1>SHOP</h1>
  
//         //     <ul>
//         //         <li>
//         //         <Link href="/shop/necklaces">Necklaces</Link>
//         //     </li>
//         //     <li>
//         //         <Link href="/shop/bracelets">Bracelets</Link>
//         //     </li>
//         //     <li>
//         //         <Link href="/shop/rings">Rings</Link>
//         //     </li>
//         //     </ul>
//         // </div>

//         <main className="flex min-h-screen flex-col items-center p-10">
//         <h1 className="text-3xl font-bold p-10">SHOP</h1>
//         <ul className="flex flex-col gap-8">
//           {posts.map((itemId) => (
//             <li key={itemId}>
//               <Link href={`shop/${itemId}`}>Item {itemId}</Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
// }

// export default Shop;



import Link from "next/link";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${BASE_API_URL}/posts`);
  return data.json();
};

export default async function Shop() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Blog Index Page</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`shop/${post.id}`}>
              <span className="text-2xl text-purple-500">
                Post {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


