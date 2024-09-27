import NavBar from "../NavBar/NavBar"
import Address from "../Address/Address"
import css from "./Header.module.css";

export default function Header() {

    return (
        <div className={css.header}>
            <NavBar />
            <Address />

        </div>
    )

}