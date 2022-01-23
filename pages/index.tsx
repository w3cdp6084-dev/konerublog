import Link from "next/link";
import { client } from "../libs/client";
import { Pagination } from '../components/Pagination';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export default function Home({ blog, totalCount}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://mochimochi.microcms.io/api/v1/blog?offset=0&limit=5', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount
    },
  };
};