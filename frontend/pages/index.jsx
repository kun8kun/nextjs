import { HeroFront,AboutSec,BlogSec,ContactSec } from '@/pages/front'
import { client } from "/libs/client";

export default function Front({ all,web,ffxiv }) {
  return (
    <main>
      <HeroFront />
      <AboutSec />
      <BlogSec all={all} web={web} ffxiv={ffxiv}  />
      <ContactSec />
    </main>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const allBlogs = await client.get({ endpoint: "blog" });
  const webBlogs = await client.get({ endpoint: "blog", queries: { filters: `category[equals]web` } });
  const ffxivBlogs = await client.get({ endpoint: "blog", queries: { filters: `category[equals]ffxiv` } });

  return {
    props: {
      all: allBlogs.contents,
      web: webBlogs.contents,
      ffxiv: ffxivBlogs.contents,
    },
  };
};