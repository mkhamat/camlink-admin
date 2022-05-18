import styles from "./container.module.css";

export default function Container({ children }: { children: JSX.Element }) {
  return <div className={styles.container}>{children}</div>;
}
