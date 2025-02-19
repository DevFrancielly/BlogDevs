import styles from "../Banner/banner.module.css"

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet. Et velit laudantium qui deleniti galisum aut facere quam! Et sunt dolorem rem quibusdam galisum est repudiandae molestiae.
                </p>
            </div>
        </div >
    );
}

export default Banner;