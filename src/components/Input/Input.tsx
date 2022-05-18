import styles from "./input.module.css";

export default function Input({
  placeholder,
  type,
  label,
  onChange,
}: {
  placeholder?: string;
  type: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={styles.email}
      onChange={onChange}
    />
  );
}
