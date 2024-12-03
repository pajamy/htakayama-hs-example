import Link from "next/link";

import styles from './Footer.module.css'

export default function Header() {
  return (
    <footer className={styles.footer}>
    <div className={`${styles['lg-flex']} ${styles['md-justify-between']}`}>
        <div>
          <address className={styles.footer__address}>
            岡本キャンパス<br />
            〒506-0052　岐阜県高山市下岡本町２０００－３０<br />
            TEL：<Link href="tel:">0577-32-5320</Link> / FAX：0577-32-5321<br />
          </address>
          <address className={styles.footer__address}>
            山田キャンパス<br />
            〒506-0058　岐阜県高山市山田町７１１<br />
            TEL：<Link href="tel:">0577-33-1060</Link> / FAX：0577-32-8994<br />
          </address>
        </div>
        <div className={styles.grid}>
          <div>
            <p className={styles['footer__navi-heading']}>メニュー1</p>
            <ul className={styles.footer__navi}>
              <li><Link href="#">アイテム1</Link></li>
              <li><Link href="#">アイテム2</Link></li>
              <li><Link href="#">アイテム3</Link></li>
            </ul>
          </div>
          <div>
            <p className={styles['footer__navi-heading']}>メニュー2</p>
            <ul className={styles.footer__navi}>
              <li><Link href="#">アイテム1</Link></li>
              <li><Link href="#">アイテム2</Link></li>
              <li><Link href="#">アイテム3</Link></li>
            </ul>
          </div>
          <div>
            <p className={styles['footer__navi-heading']}>メニュー3</p>
            <ul className={styles.footer__navi}>
              <li><Link href="#">アイテム1</Link></li>
              <li><Link href="#">アイテム2</Link></li>
              <li><Link href="#">テストアイテム3</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyright}>Copyright(C)　2010 飛騨高山高等学校　 All Rights Reserved.</p>
    </footer>
  );
}
