// pages/category/[id].js
import Link from "next/link";
import { client } from "/libs/client";
import { HeroPages, OddEvenSec } from "@/common/index";
import styles from 'styles/pages/blog/category/category.module.css'

export default function CategoryId({ blog }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <main>
      <HeroPages />
      <OddEvenSec keyProps='odd' marginTop="300px">
        <div className={styles.section}>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.category.id}/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
        </div>
      </OddEvenSec>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const category = context.params.category;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${category}` } });

  return {
    props: {
      blog: data.contents,
    },
  };
};