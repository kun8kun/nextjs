import Link from "next/link";
import styles from "@/common/LinkButton/LinkButton.module.css";

const H2 = ({ text, w , href }) => {
  const widthStyle = {
    width: typeof w === 'number' ? `${w}px` : w === 'auto' ? 'auto' : w === '100%' ? '100%' : null,
  };
  return (
    <Link className={styles.link} style={widthStyle} href={href}>
      {text}
    </Link>
  );
};

export default H2;