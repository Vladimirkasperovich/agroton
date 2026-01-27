import styles from './page.module.css';
import { Header } from '@/app/components/Header/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque, culpa deserunt
          dignissimos doloribus ducimus ea, explicabo fugit harum inventore ipsam iure natus
          necessitatibus numquam obcaecati quia ratione recusandae unde?
        </div>
        <div>
          Cupiditate dolor dolore dolores itaque mollitia, perferendis quia quibusdam quisquam
          reprehenderit vitae. Ab adipisci alias debitis eius eveniet facilis nostrum tempora. Cum
          dicta eum impedit inventore mollitia nisi recusandae, suscipit.
        </div>
        <div>
          A aspernatur cum distinctio dolorem eaque earum error in minima possimus, voluptatibus?
          Cupiditate deleniti dolore eaque, eligendi enim error fuga in ipsa iste necessitatibus
          neque quas quos temporibus totam, voluptas.
        </div>
      </main>
    </div>
  );
}
