import styles from './footer.module.css';

export default function Footer(){
    return(
        <div>
            <div className={styles.above}>
                <div className={styles.content}>
                    <h5 className={styles.description}>
                        臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                    </h5>
                    <ul className={styles.list}>
                        <li className={styles.item}><a href="/" className={styles.link}><i ></i></a></li>
                        <li className={styles.item}><a href="/" className={styles.link}><i ></i></a></li>
                        <li className={styles.item}><a href="/" className={styles.link}><i ></i></a></li>
                    </ul>
                </div>
            </div>


            <div className={styles.below}>
            <div>
                <h6>
                &copy; Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </div>
    );
}