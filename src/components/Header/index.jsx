import styles from "./header.module.css";

export default function Header({ title, slogan }) {

    return (
        <div style={styles.header}>
            <div>
                <img style={styles.headerAvatar} src="./images/avatar.png" alt="avatar"/>
                <h1 style={styles.headerTitle}>
                    {title}
                </h1>
                <hr style={styles.hrHeaderLine} />
                <p style={styles.headerSlogan}>
                    {slogan}
                </p>
            </div>
        </div>
    );
}