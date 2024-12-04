"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from 'next/image'
import Link from "next/link";

import styles from '/public/styles/Okamoto.module.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


export default function Page() {
  return (
    <main>
      <div className={styles.okamoto}>
        <h1 className={styles.okamoto__heading}>岡本キャンパス</h1>
        <Swiper
          loop={true}
          effect="fade"
          autoplay={{ delay: 5000 }}
          modules={[Autoplay, Pagination, EffectFade]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <Image
              src="/images/okamoto/okamoto1.webp"
              alt="slide"
              fill
              className={styles['swiper-img']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/okamoto/okamoto2.webp"
              alt="slide"
              fill
              className={styles['swiper-img']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/okamoto/okamoto3.webp"
              alt="slide"
              fill
              className={styles['swiper-img']}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* TODO: GraphQLで最新のニュースを取得して無限スクロールできるようにする */}
      <div className={styles['okamoto-news']}>
        <h1 className={styles['okamoto-news__title']}>NEWS</h1>
        <h2 className={styles['okamoto-news__sub-title']}>岡本キャンパスからのお知らせ</h2>
        <ul className={styles['okamoto-news__content']}>
          <li className={styles['okamoto-news__item']}><Link href="#" className={styles['okamoto-news__link']}><span className={styles['okamoto-news__date']}>R4.8.30</span><span className={styles['okamoto-news__label']}>総合ニュース</span><p>制服が変わります！ 令和5年度入学生から、飛騨高山高校の制服が新しくなります。</p></Link></li>
          <li className={styles['okamoto-news__item']}><Link href="#" className={styles['okamoto-news__link']}><span className={styles['okamoto-news__date']}>R4.6.27</span><span className={styles['okamoto-news__label']}>総合ニュース</span><p>演劇部の紹介 演劇部の活動について、部長の船場さんに答えていただきました。</p></Link></li>
          <li className={styles['okamoto-news__item']}><Link href="#" className={styles['okamoto-news__link']}><span className={styles['okamoto-news__date']}>R4.6.27</span><span className={styles['okamoto-news__label']}>総合ニュース</span><p>演劇部の紹介 演劇部の活動について、部長の船場さんに答えていただきました。</p></Link></li>
          <li className={styles['okamoto-news__item']}><Link href="#" className={styles['okamoto-news__link']}><span className={styles['okamoto-news__date']}>R4.7.21</span><span className={styles['okamoto-news__label']}>総合ニュース</span><p>秀峰寮　避難訓練 7月11日に、秀峰寮で避難訓練を行いました。</p></Link></li>
          <li className={styles['okamoto-news__item']}><Link href="#" className={styles['okamoto-news__link']}><span className={styles['okamoto-news__date']}>R4.7.17</span><span className={styles['okamoto-news__label']}>総合ニュース</span><p>野球部　全国高校野球選手権岐阜大会２回戦 河上薬品スタジアムにて行われた全国高等学校野球選手権岐阜大会２回戦で、本校野球部が勝利しました！</p></Link></li>
        </ul>
        <Link href="#" className={`${styles.button} ${styles['okamoto-news']} ${styles['okamoto-news__list-link']}`}>一覧を見る</Link>
      </div>
      <ul className={styles.list} >
        <li className={styles.list__item} ><Link className={styles.list__link} href="#">ビジネス科</Link></li>
        <li className={styles.list__item}><Link className={styles.list__link} href="#">生活デザイン科</Link></li>
        <li className={styles.list__item}><Link className={styles.list__link} href="#">ビジネス情報科</Link></li>
        <li className={styles.list__item}><Link className={styles.list__link} href="#">普通科</Link></li >
      </ul >
    </main>
  );
}