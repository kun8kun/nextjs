import styles from "@/pages/front/BlogSec/BlogSec.module.css";
import { H2,OddEvenSec,BlogCard,LinkButton } from "@/common/index"
import { useState } from "react";

const BlogSec = ({ all,web,ffxiv }) => {
  const [activeTab, setActiveTab] = useState(1) // 1 is the default active tab

 const handleTabClick = (tabIndex) => {
   setActiveTab(tabIndex)
 }

 const allPosts = all
 const ffxivPosts = ffxiv
 const webPosts = web

 let postsToDisplay = allPosts; // default to showing the latest posts
 let tagPath = '/blog';
 let tabStyle = { left: '0' };
 
 if (activeTab === 2) {
   postsToDisplay = ffxivPosts;
   tagPath = '/blog/ffxiv';
   tabStyle = { left: '100px' };
 } else if (activeTab === 3) {
   postsToDisplay = webPosts;
   tagPath = '/blog/web';
   tabStyle = { left: '200px' };
 }

 return (
   <OddEvenSec keyProps='even' className={styles.section}>
     <H2 heading='ブログ' subheading='BLOG' />
     <div className={styles.section}>
       <div className={styles.tab}>
          <button className={activeTab === 1 ? `${styles.active}` : ''} onClick={() => handleTabClick(1)}>ALL</button>
          <button className={activeTab === 2 ? `${styles.active}` : ''} onClick={() => handleTabClick(2)}>FF14</button>
          <button className={activeTab === 3 ? `${styles.active}` : ''} onClick={() => handleTabClick(3)}>WEB</button>
          <div className={styles.tabBg} style={tabStyle}></div>
        </div>
        <div className={styles.cardContainer}>
          {postsToDisplay.slice(0, 3).map((post) => (
            <BlogCard post={post} />
          ))}
        </div>
        {postsToDisplay.length > 3 ? (
                <LinkButton text="もっとみる" w={"auto"} href={tagPath}/>
              ) : (
                null
              )}
     </div>
   </OddEvenSec>
 );
};

export default BlogSec;