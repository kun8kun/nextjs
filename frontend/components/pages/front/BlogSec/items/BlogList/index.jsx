import { LinkButton } from "@/common/index";
import { BlogItem } from "@/pages/front/BlogSec/items";
import styles from "@/pages/front/BlogSec/items/BlogList/BlogList.module.css";
import Link from "next/link";

const BlogList = (props) => {

  const { blog, categoryName ,categoryID } = props;

  return (
        <div className={styles.container}>
          <h3 className={styles.title}>{categoryName}の記事</h3>
          <ul className={styles.list}>
            {blog.slice(0, 3).map((post) => (
              <li key={post.id}>
                <BlogItem post={post} />
              </li>
            ))}
          </ul>
          {blog.length > 3 ? (
            <LinkButton text={`${categoryName}の記事一覧を見る`} w={"auto"} href={`/blog/${categoryID}`}/>
          ) : (
            null
          )}
        </div>
  );
};

export default BlogList;