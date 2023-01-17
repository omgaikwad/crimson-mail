import React from "react";
import styles from "./SingleEmailItem.module.css";
import "../../App.css";
import ProfilePictureRound from "../ProfilePictureRound/ProfilePictureRound";

const SingleEmailItem = ({ isRead }) => {
  return (
    <div
      className={
        isRead ? styles["single_email_item_read"] : styles["single_email_item"]
      }
    >
      <div className={styles["single_email_item__profile_pic"]}>
        <ProfilePictureRound firstCharacter={"O"} />
      </div>
      <div className={styles["single_email_item__content"]}>
        <div className={styles["single_email_item__content__sender"]}>
          <span className={styles["single_email_item__content__small_text"]}>
            From:{" "}
          </span>
          <span className={styles["single_email_item__content__sender__name"]}>
            Foo Bar &lt;foo.bar@gmail.com&#62;
          </span>
        </div>
        <div className={styles["single_email_item__content__subject"]}>
          <span className={styles["single_email_item__content__small_text"]}>
            Subject:{" "}
          </span>
          <span className={styles["single_email_item__content__subject__name"]}>
            Lorem Ipsum
          </span>
        </div>
        <div className={styles["single_email_item__content__message"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </div>
        <footer className={styles["single_email_item__content__footer"]}>
          <p className={styles["single_email_item__content__date"]}>
            26/02/2020 10:30am
          </p>

          {/* Show Favourite Text if the Mail is favourited */}
          {/* <p className={styles["single_email_item__content__favourite_btn"]}>
            Favourite
          </p> */}
        </footer>
      </div>
    </div>
  );
};

export default SingleEmailItem;
