import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'

interface TeacherCardProps {
  name: string;
  title: string;
  email: string;
  phone?: string;
  wechat?: string;
  photoUrl: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  title,
  email,
  phone,
  wechat,
  photoUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={photoUrl} alt={name} className={styles.photo} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.contact}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        {phone && (
          <p className={styles.contact}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <span>{phone}</span>
          </p>
        )}
        {wechat && (
          <p className={styles.contact}>
            <FontAwesomeIcon icon={faWeixin} className={styles.icon} />
            <span>{wechat}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;