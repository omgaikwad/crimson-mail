import React from "react";
import styles from "./EmailContent.module.css";
import SingleEmailItem from "../SingleEmailItem/SingleEmailItem";
import ProfilePictureRound from "../ProfilePictureRound/ProfilePictureRound";
import moment from "moment/moment";

const EmailContent = ({ mail, mailData }) => {
  const dateTime = moment
    .unix(Number(mailData["date"] / 1000))
    .format("h:mm A, dddd, MMMM Do, YYYY");

  const cleanText = mail["body"].replace(/<\/?[^>]+(>|$)/g, "");

  console.log(cleanText);

  return (
    <div className={styles["email_content"]}>
      <div className={styles["email_content__profile_pic"]}>
        <ProfilePictureRound
          firstCharacter={`${mailData["from"]["name"][0]}`}
        />
      </div>
      <div className={styles["email_content__container"]}>
        <header className={styles["email_content__header"]}>
          <div className={styles["email_content__header__subject_container"]}>
            <p className={styles["email_content__header__subject"]}>
              {mailData["subject"]}
            </p>
            <p className={styles["email_content__header__date"]}>{dateTime}</p>
          </div>
          <div className={styles["email_content__header__favourite_btn"]}>
            <button
              className={styles["email_content__header__favourite_btn__btn"]}
            >
              Mark as favourite
            </button>
          </div>
        </header>
        <body className={styles["email_content__body"]}>
          <p className={styles["email_content__body__message"]}>{cleanText}</p>
        </body>
      </div>
    </div>
  );
};

export default EmailContent;
