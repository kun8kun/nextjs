import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useSlideIn = () => {
  const [refs, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowChildren(true);
    }
  }, [inView]);

  const slideInStyles = {
    opacity: showChildren ? 1 : 0,
    transform: `translateY(${showChildren ? 0 : 20}px)`,
    transition: "all .6s ease-out",
  };

  const ref = (element) => {
    if (element) {
      refs(element);
    }
  };

  return { ref, slideInStyles };
};

export default useSlideIn;

// 使い方
// 0. yarn add react-intersection-observer ライブラリインストールする
// 1. import useSlideIn from "hooks/useSlideIn"; 読み込む
// 2. const s = Array.from({ length: 2 }, () => useSlideIn()); 定義する（lengthには要素数）
// 3. ref={s[0].ref} style={s[0].slideInStyles} 組み込む（jsx内の属性に）