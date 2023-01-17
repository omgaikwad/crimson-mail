import React from "react";
import styles from "./EmailContent.module.css";
import SingleEmailItem from "../SingleEmailItem/SingleEmailItem";
import ProfilePictureRound from "../ProfilePictureRound/ProfilePictureRound";

const EmailContent = () => {
  return (
    <div className={styles["email_content"]}>
      <div className={styles["email_content__profile_pic"]}>
        <ProfilePictureRound firstCharacter={"H"} />
      </div>
      <div className={styles["email_content__container"]}>
        <header className={styles["email_content__header"]}>
          <div className={styles["email_content__header__subject_container"]}>
            <p className={styles["email_content__header__subject"]}>
              Lorem Ipsum
            </p>
            <p className={styles["email_content__header__date"]}>
              26/02/2020 10:30am
            </p>
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
          <p className={styles["email_content__body__message"]}>
            {/* 500 words lorem  */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            <br />
            <br />
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            <br />
            <br />
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, nec lacinia nisl nisl nec nunc.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            nec lacinia nisl nisl nec nunc. Sed euismod, nisl eget ultricies
          </p>
        </body>
      </div>
    </div>
  );
};

export default EmailContent;
