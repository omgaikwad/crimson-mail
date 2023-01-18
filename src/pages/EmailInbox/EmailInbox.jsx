import React, { useEffect, useState } from "react";
import styles from "./EmailInbox.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMails,
  getSingleMailContent,
} from "../../features/mails/mailsSlice";
import SingleEmailItem from "../../components/SingleEmailItem/SingleEmailItem";
import EmailContent from "../../components/EmailContent/EmailContent";

const EmailInbox = () => {
  const allMailArray = useSelector((state) => state.mails.list);
  const { status, sortBy } = useSelector((state) => state.mails);
  const dispatch = useDispatch();

  const singleMail = useSelector((state) => state.mails.singleMail);

  const [activeMail, setActiveMail] = useState({
    mailData: null,
    isMailActive: false,
  });

  useEffect(() => {
    dispatch(getAllMails());
  }, []);

  const onEmailClick = (mail) => {
    const mailId = mail.id;
    dispatch(getSingleMailContent(mailId));

    setActiveMail({
      mailData: mail,
      isMailActive: true,
    });
  };

  return (
    <div className={styles["email_inbox"]}>
      <div className={styles["email_inbox__filterby"]}>
        <span className={styles["email_inbox__filterby__title"]}>
          Filter By:
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
      {!activeMail.isMailActive && (
        <div className={styles["email_inbox__all_mails"]}>
          {allMailArray.map((mail) => {
            return (
              <SingleEmailItem
                key={mail.id}
                onEmailClick={() => {
                  onEmailClick(mail);
                }}
                mail={mail}
                isRead={false}
              />
            );
          })}
        </div>
      )}

      {activeMail.isMailActive && (
        <div className={styles["email_inbox__selected_mail_container"]}>
          <div className={styles["email_inbox__all_mail_list"]}>
            {allMailArray.map((mail) => {
              return (
                <SingleEmailItem
                  key={mail.id}
                  onEmailClick={() => {
                    onEmailClick(mail.id);
                  }}
                  mail={mail}
                  isRead={false}
                />
              );
            })}
          </div>
          <div className={styles["email_inbox__single_mail_content"]}>
            <EmailContent mail={singleMail} mailData={activeMail["mailData"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailInbox;
