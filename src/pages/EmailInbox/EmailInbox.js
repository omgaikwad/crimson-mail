import React from "react";
import styles from "./EmailInbox.module.css";

const EmailInbox = () => {
  return (
    <div className={styles["email_inbox"]}>
      <div className={styles["email_inbox__filterby"]}>
        <span className={styles["email_inbox__filterby__title"]}>
          Filter By
        </span>
        <button className={styles["email_inbox__filterby__button"]}>
          Unread
        </button>
        <button className={styles["email_inbox__filterby__button"]}>
          Read
        </button>
        <button className={styles["email_inbox__filterby__button"]}>
          Favourites
        </button>
      </div>
    </div>
  );
};

export default EmailInbox;
