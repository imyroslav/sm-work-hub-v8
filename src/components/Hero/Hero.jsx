import css from "./Hero.module.css"


export default function Hero() {

    return (
        <section className={css.section}>
      <div className={css.hero}>
        <h1 className={css.h1}>
          ОФИЦИАЛЬНАЯ РАБОТА В ЕВРОПЕ
        </h1>
        <h3 className={css.h3}>
          ВАКАНСИИ ДЛЯ ГРАЖДАН УКРАИНЫ, БЕЛОРУССИИ, СТРАН ЕВРОПЫ И СРЕДНЕЙ АЗИИ
        </h3>
        <a className={css.link} href="./vacancy.html">
          АКТУАЛЬНЫЕ ВАКАНСИИ
        </a>
      </div>
    </section>
    )
}