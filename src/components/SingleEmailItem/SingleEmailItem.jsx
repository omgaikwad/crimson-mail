import React from "react";
import styles from "./SingleEmailItem.module.css";
import "../../App.css";
import ProfilePictureRound from "../ProfilePictureRound/ProfilePictureRound";
import moment from "moment";

const SingleEmailItem = ({ mail, isRead, onEmailClick }) => {
  const dateString = moment.unix(mail["date"]).format("DD/MM/YYYY hh:mm a");

  // divide the given unix timestamp as unix takes seconds and given value is in milliseconds
  const dateTime = moment
    .unix(Number(mail["date"] / 1000))
    .format("h:mm A, dddd, MMMM Do, YYYY");
  return (
    <div
      onClick={onEmailClick}
      className={
        isRead ? styles["single_email_item_read"] : styles["single_email_item"]
      }
    >
      <div className={styles["single_email_item__profile_pic"]}>
        <ProfilePictureRound firstCharacter={`${mail["from"]["name"][0]}`} />
      </div>
      <div className={styles["single_email_item__content"]}>
        <div className={styles["single_email_item__content__sender"]}>
          <span className={styles["single_email_item__content__small_text"]}>
            From:{" "}
          </span>
          <span className={styles["single_email_item__content__sender__name"]}>
            {mail["from"]["name"]} &lt;{mail["from"]["email"]}&#62;
          </span>
        </div>
        <div className={styles["single_email_item__content__subject"]}>
          <span className={styles["single_email_item__content__small_text"]}>
            Subject:{" "}
          </span>
          <span className={styles["single_email_item__content__subject__name"]}>
            {mail["subject"]}
          </span>
        </div>
        <div className={styles["single_email_item__content__message"]}>
          {mail["short_description"]}
        </div>
        <footer className={styles["single_email_item__content__footer"]}>
          <p className={styles["single_email_item__content__date"]}>
            {dateTime}
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
