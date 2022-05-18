import styles from "./model-card.module.css";
import { Model, OnlineStatus } from "../../types";
import EditIcon from "../icons/EditIcon";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <div className={styles.card}>
      {model.onEdit && (
        <a onClick={model.onEdit} href='#' className={styles.edit}>
          <EditIcon />
        </a>
      )}
      <div className={styles.info}>
        <img src={model.avatar} alt="" />
        <div>
          <p className={styles.name}>{model.name}</p>
          <OnlineIndicator status={model.status} />
        </div>
      </div>
      <div className={styles.activity}>
        <div>
          <p>Последний сеанс: </p> <span>{model.activity.latest}</span>
        </div>
        <div>
          <p>Часов за период: </p> <span>{model.activity.period}</span>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator({ status }: { status: OnlineStatus }) {
  return (
    <p>
      <div className={`${styles.indicator} ${styles[status.toLowerCase()]}`} />
      <span className={styles.status}>{status}</span>
    </p>
  );
}
