import React from "react";
import Card from "./Card";

export default function Shop(){
  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-3xl md:text-6xl font-bold mb-15 text-center text-dark_blue font-serif m-[20px]">Rings</h1>
      
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </div>
    </div>
  );
}











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



// import Link from "next/link";

// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// const getPosts = async (): Promise<Post[]> => {
//   const data = await fetch(`${BASE_API_URL}/posts`);
//   return data.json();
// };

// export default async function Shop() {
//   const posts = await getPosts();
//   return (
//     <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
//       <h1 className="text-3xl font-bold p-10">Blog Index Page</h1>
//       <ul className="flex flex-col gap-8">
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link href={`shop/${post.id}`}>
//               <span className="text-2xl text-purple-500">
//                 Post {post.title}
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }


//in [postId] page.tsx
// import { Post } from "../page";

// interface Params {
//   postId: string;
// }

// const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// const getPost = async (id: string): Promise<Post> => {
//   const data = await fetch(`${BASE_API_URL}/posts/${id}`);
//   return data.json();
// };

// export default async function BlogPost({ params }: { params: Params }) {
//   const post = await getPost(params.postId);

//   return (
//     <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
//       <h1 className="text-3xl font-bold p-10 capitalize">
//         <span className="text-neutral-400">Post {post.id}:</span> {post.title}
//       </h1>
//       <p className="text-xl p-10">{post.body}</p>
//     </main>
//   );
// }

