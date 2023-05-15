// pages/index.js
import Link from "next/link";
import { client } from "/libs/client";
import { HeroPages, OddEvenSec } from "@/common/index";
import styles from 'styles/pages/blog/blog.module.css'

export default function Home({ blog, category }) {
  return (
    <main>
      <HeroPages />
      <OddEvenSec keyProps='odd' marginTop="300px">
        <div className={styles.section}>
        <ul>
          {category.map((category) => (
            <li key={category.id}>
              <Link href={`/blog/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};