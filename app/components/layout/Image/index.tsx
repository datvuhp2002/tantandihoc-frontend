import React, { useState, ReactNode, ImgHTMLAttributes } from "react";
import images from "../../../../public/images";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Image= ({
  src,
  alt,
  className,
  logo,
  fallback: customFallback = images.default,
  w100,
  w50,
  minw30,
  h100,
  h50,
  minh30,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  logo?:boolean
  w100?: boolean;
  w50?: boolean;
  minw30?: boolean;
  h100?: boolean;
  h50?: boolean;
  minh30?: boolean;
}) => {
  const [fallback, setFallback] = useState<string | undefined>("");
  const Loading: React.FC = () => <div className={cx("lds-dual-ring")}></div>;
  function handleError() {
    setFallback(customFallback);
  }

  const classes = cx("wrapper", {
    w100,
    w50,
    minw30,
    h100,
    h50,
    minh30,
    logo,
    [className!]: className,
  });

  return (
    <img
      className={cx("wrapper", classes)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
};

export default Image;
