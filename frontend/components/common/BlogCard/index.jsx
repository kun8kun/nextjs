import styles from "@/common/BlogCard/BlogCard.module.css";
import Link from "next/link";
import useSlideIn from "hooks/useSlideIn";


// 本番用
const BlogCard = (props) => {
  const s = Array.from({ length: 1 }, () => useSlideIn());
  const { post } = props;
  const publishedAt = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

// テスト用
// const BlogCard = ({ title }) => {
//   const s = Array.from({ length: 1 }, () => useSlideIn());
//     const post = {
//     id: "12345",
//     category: {
//         id: "web",
//         name: "WEB"
//     },
//     subcategory: {
//         id: "design",
//         subcategory: "デザイン"
//     },
//     title: title,
//     eyecatch: {
//         url: "https://placehold.jp/1200x630.png"
//     },
//     publishedAt: "2023/05/11"
//     };
  
  
  return (
        <Link href={`/blog/${post.category.id}/${post.id}`}>
          <div  ref={s[0].ref} style={s[0].slideInStyles} className={styles.container}>
            <img className={styles.eyecatch} src={post.eyecatch.url} alt={post.title}/>
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

export default BlogCard;