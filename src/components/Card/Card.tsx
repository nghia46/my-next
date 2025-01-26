"use client"
import { useRouter } from 'next/navigation';
import styles from './Card.module.scss';

interface CardProps {
  id : number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({id, title, description, imageUrl }: CardProps) {

  const router = useRouter();

  const handleLearnMore = () => {
    // Chuyển hướng đến trang chi tiết sản phẩm
    router.push(`/product/${id}`);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleLearnMore}>Learn More</button>
      </div>
    </div>
  );
}
