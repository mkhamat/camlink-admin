import styles from "./button.module.css";
import { ButtonType } from "../../types";

export function Button({
  text,
  type,
  icon,
  full,
  onPress
}: {
  text: string;
  type: ButtonType;
  icon?: JSX.Element;
  full?: boolean;
  onPress: React.MouseEventHandler
}) {
  return (
    <button className={`${styles.button} ${styles[type]} ${full ? styles.full_w : ''}`} onClick={onPress}>{icon && icon} {text}</button>
  );
}
