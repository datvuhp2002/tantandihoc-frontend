import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Styles from "./Button.module.scss";
const cx = classNames.bind(Styles);
export default function Button({
  toActive,
  href,
  ref,
  play = false,
  primary = false,
  offSetMenu = false,
  btnType = false,
  trailer = false,
  contact = false,
  primaryHeader = false,
  outline = false,
  menu = false,
  header = false,
  disabled = false,
  rounded = false,
  text = false,
  small = false,
  large = false,
  active = false,
  LinkHeader = false,
  login = false,
  register = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passsProps
}:{
  toActive?: any;
  href?: string;
  ref?: React.Ref<any>;
  play?: boolean;
  primary?: boolean;
  offSetMenu?: boolean;
  btnType?: boolean;
  trailer?: boolean;
  contact?: boolean;
  primaryHeader?: boolean;
  outline?: boolean;
  menu?: boolean;
  header?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  text?: boolean;
  small?: boolean;
  large?: boolean;
  login?:boolean;
  register?: boolean;
  active?: boolean;
  LinkHeader?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) {
  let Comp: React.ElementType = "button";
  let _props: Record<string, any> = { onClick, ...passsProps };
  // remove event listener when btn is disable
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith("on") && _props[key] === "function") {
        delete _props[key];
      }
    });
  }
  if (href) {
    _props.href = href;
    Comp = Link;
  }

  const classes = cx("wrapper", {
    primary,
    primaryHeader,
    offSetMenu,
    active,
    btnType,
    trailer,
    contact,
    outline,
    menu,
    header,
    disabled,
    play,
    rounded,
    LinkHeader,
    text,
    login,
    register,
    [className!]: className,
    small,
    large,
  });
  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("Icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("Icon")}>{rightIcon}</span>}
    </Comp>
  );
}
