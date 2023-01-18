import React from "react";
import styles from "./ProfilePictureRound.module.css";

const ProfilePictureRound = ({ firstCharacter }) => {
  return (
    <div className={styles["profile_picture_round"]}>{firstCharacter}</div>
  );
};

export default ProfilePictureRound;
