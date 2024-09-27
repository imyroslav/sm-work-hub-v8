import css from "./Address.module.css"


export default function Address() {

    return (
        <address className={css.address}>
            <ul className={css.list}>
              <li>
                <a className={css.link} href="tel:+48574229012">
                  +48 574 229 012
                </a>
              </li>
              <li>
                <a className={css.link} href="mailto:smworkhub@gmail.com">
                  smworkhub@gmail.com                      
                </a>
              </li>
            </ul>

          </address>
    )
}