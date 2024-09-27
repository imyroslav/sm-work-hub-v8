import css from "./NavBar.module.css";


export default function NavBar() {

    return (
        <nav className={css.navigation}>
            <a className={css.logo} href="./index.html">
              SM  WORK  HUB
            </a>
        </nav>
    )
}