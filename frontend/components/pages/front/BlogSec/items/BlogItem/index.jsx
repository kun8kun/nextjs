import styles from "@/pages/front/BlogSec/items/BlogItem/BlogItem.module.css";
import Link from "next/link";
import Image from 'next/image';
import useSlideIn from "hooks/useSlideIn";



const BlogList = (props) => {
  const s = Array.from({ length: 1 }, () => useSlideIn());
  const { post } = props;
  const publishedAt = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return (
        <Link href={`/blog/${post.category.id}/${post.id}`}>
          <div  ref={s[0].ref} style={s[0].slideInStyles} className={styles.container}>
            <img className={styles.eyecatch} src={`${post.eyecatch.url}?fit=crop&w=110&h=110`} alt={post.title}/>
            <div className={styles.content}>
              <div className={styles.tag}>
                <p className={styles.category}>{post.subcategory.subcategory}</p>
                <p className={styles.date}>{publishedAt}</p>
              </div>
              <h4 className={styles.title}>{post.title}</h4>
            </div>
          </div>
        </Link>
  );
};

export default BlogList;