// pages/blog/[id].js
import { HeroDetails, OddEvenSec } from "@/common/index";
import { client } from "/libs/client";
import styles from 'styles/pages/blog/category/detail/detail.module.css'

export default function BlogId({ blog }) {
  return (
    <main>
      <HeroDetails />
      <OddEvenSec keyProps='odd' marginTop="300px">
        <div className={styles.section}>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
        </div>
      </OddEvenSec>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.category.id}/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const category = context.params.category.id;
  const data = await client.get({ endpoint: "blog", categoryId: category, contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};