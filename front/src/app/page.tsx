"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from 'next/image'
import Link from "next/link";

import styles from '/public/styles/HomePage.module.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


export default function Page() {
  return (
    <main>
      <Swiper
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination, EffectFade]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image
            src="/images/top/slides/okamoto.webp"
            alt="岡本キャンパス"
            fill
            className={styles['swiper-img']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/top/slides/yamada.webp"
            alt="山田キャンパス"
            fill
            className={styles['swiper-img']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/top/slides/motto.webp"
            alt="モットー"
            fill
            className={styles['swiper-img']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/top/slides/seisan.webp"
            alt="生産"
            fill
            className={styles['swiper-img']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/top/slides/gyusha.webp"
            alt="牛舎"
            fill
            className={styles['swiper-img']}
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles['top-news']}>
        {/* TODO: GraphQLで最新のニュースを取得して無限スクロールできるようにする */}
        <h1 className={styles['top-news__title']}>NEWS</h1>
        <h2 className={styles['top-news__sub-title']}>飛騨高山高等学校からのお知らせ</h2>
        <ul className={styles['top-news__content']}>
          <li className={styles['top-news__item']}><Link href="#" className={styles['top-news__link']}><span className={styles['top-news__date']}>R4.8.30</span><span className={styles['top-news__label']}>総合ニュース</span><p>制服が変わります！ 令和5年度入学生から、飛騨高山高校の制服が新しくなります。</p></Link></li>
          <li className={styles['top-news__item']}><Link href="#" className={styles['top-news__link']}><span className={styles['top-news__date']}>R4.7.21</span><span className={styles['top-news__label']}>総合ニュース</span><p>秀峰寮　避難訓練 7月11日に、秀峰寮で避難訓練を行いました。</p></Link></li>
          <li className={styles['top-news__item']}><Link href="#" className={styles['top-news__link']}><span className={styles['top-news__date']}>R4.7.17</span><span className={styles['top-news__label']}>総合ニュース</span><p>野球部　全国高校野球選手権岐阜大会２回戦 河上薬品スタジアムにて行われた全国高等学校野球選手権岐阜大会２回戦で、本校野球部が勝利しました！</p></Link></li>
          <li className={styles['top-news__item']}><Link href="#" className={styles['top-news__link']}><span className={styles['top-news__date']}>R4.7.15</span><span className={styles['top-news__label']}>総合ニュース</span><p>地球のステージ　高山市民文化会館大ホールにて、高山市出身の桑山紀彦医師による音楽ステージを全校生徒が鑑賞しました。</p></Link></li>
          <li className={styles['top-news__item']}><Link href="#" className={styles['top-news__link']}><span className={styles['top-news__date']}>R4.6.27</span><span className={styles['top-news__label']}>総合ニュース</span><p>演劇部の紹介 演劇部の活動について、部長の船場さんに答えていただきました。</p></Link></li>
        </ul><Link href="#" className={`${styles.button} ${styles['top-news__list-link']}`}>一覧を見る</Link></div>
      <div className={styles['top-campus']}><Link href="#" className={`${styles['top-campus__link']} ${styles['top-campus__link--okamoto']}`}>岡本キャンパス</Link>
        <Link href="#" className={`${styles['top-campus__link']} ${styles['top-campus__link--yamada']}`}>山田キャンパス</Link></div>
      <div className={styles['top-department']}>
        <h1 className={styles['top-department__title']}>学科</h1>
        <h2 className={styles['top-department__sub-title']}>飛騨高山高等学校で学ぶ</h2>
        <div className={styles['top-department__wrap']}>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/futuu.webp" alt="普通科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>普通科</p>
            <p className={styles['top-department__desc']}>上級学校への進学を目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/business.webp" alt="ビジネス科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>ビジネス科</p>
            <p className={styles['top-department__desc']}>会計・流通の基礎的な学習から専門的な知識を身に付け、社会で広く活躍するスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/business_info.webp" alt="ビジネス情報科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>ビジネス情報科</p>
            <p className={styles['top-department__desc']}>高度情報通信社会に対応して、コンピュータをより効率的に活用するための知識と技術を習得し、 情報通信社会のスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/life_design.webp" alt="生活デザイン科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>生活デザイン科</p>
            <p className={styles['top-department__desc']}>衣・食・住・保育・福祉などを学び、フード、ファッション、ヒューマンサービスのスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/food.webp" alt="食品科学科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>食品科学科</p>
            <p className={styles['top-department__desc']}>地域資源を利用した商品開発や販売実習を通して、地域を支える食品製造や食品流通に関するスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/animal.webp" alt="動物科学科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>動物科学科</p>
            <p className={styles['top-department__desc']}>命を育み、動物の適正な飼育と高品質な畜産物の生産、動物介在活動に関するスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/gardening.webp" alt="園芸科学科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>園芸科学科</p>
            <p className={styles['top-department__desc']}>地域を支える園芸作物の生産・加工・流通を学び、農業経営や生産物の流通・活用に関するスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
          <div className={styles['top-department__card']}><Image src="/images/top/departments/nature.webp" alt="環境科学科画像" width={400} height={300} className={styles['top-department__img']} />
            <p className={styles['top-department__name']}>環境科学科</p>
            <p className={styles['top-department__desc']}>地域の水や生き物を育む森林とその資源を守り、快適な地域環境を創造・維持するための防災・工事・森林管理・活用に関するスペシャリストを目指します。</p><Link href="#" className={`${styles.button} ${styles['button--small']} ${styles['top-department__link']}`}>詳しく見る →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}