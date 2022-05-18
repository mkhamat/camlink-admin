import styles from "./admin-panel.module.css";
import Container from "../../components/Container/Container";
import ManagerIcon from "../../components/icons/ManagerIcon";
import UserIconGrey from "../../components/icons/UserIconGrey";
import ArrowIcon from "../../components/icons/ArrowIcon";

export default function AdminPanel() {
  return (
    <div>
      <Container>
        <>
          <div className={styles.header}>
            <div className={styles.manager}>
              <ManagerIcon />
              <div className={styles.name}>
                <p className={styles.title}>Менеджер:</p>
                <p className={styles.value}>@Camlink</p>
              </div>
            </div>
            <div className={styles.dropdown}>
              <UserIconGrey />
              <span>Kinky</span>
              <ArrowIcon />
            </div>
          </div>
          <div className={styles.main}>
            
          </div>
        </>
      </Container>
    </div>
  );
}
