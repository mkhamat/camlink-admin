import styles from "./login-screen.module.css";
import { Button } from "../../components/Button/Button";
import Logo from "../../components/icons/Logo";
import { ButtonType } from "../../types";
import UserIconPink from "../../components/icons/UserIconPink";
import Input from "../../components/Input/Input";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginScreen({ signup }: { signup?: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (signup && password !== confirm) {
      return;
    }
    navigate("/");
    console.log(`${email} ${password}`);
  };

  return (
    <Container>
      <>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.login_box}>
          <UserIconPink />
          {signup ? <p>Регистрация</p> : <p>Вход в аккаунт</p>}
          <Input
            type="email"
            placeholder="Электронная почта"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          {signup && (
            <Input
              type="password"
              placeholder="Подвердите пароль"
              onChange={(e) => setConfirm(e.target.value)}
            />
          )}
          <div>
            <Button
              text={signup ? "Зарегистрироваться" : "Войти"}
              type={ButtonType.primary}
              onPress={handleSubmit}
              full
            />
          </div>
          {signup ? (
            <Link to="/login">Вход</Link>
          ) : (
            <Link to="/signup">Регистрация</Link>
          )}
        </div>
      </>
    </Container>
  );
}
