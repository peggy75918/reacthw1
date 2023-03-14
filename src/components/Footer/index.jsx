import styles from './footer.module.css';

export default function Footer(){
    return(
        <div>
            <div style={styles.above}>
                <div style={styles.content}>
                    <h5 style={styles.description}>
                        臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                    </h5>
                    <ul style={styles.list}>
                        <li style={styles.item}><a href="/" style={styles.link}><i className="fa-facebook-f"></i></a></li>
                        <li style={styles.item}><a href="/" style={styles.link}><i className="fa-google-plus-g"></i></a></li>
                        <li style={styles.item}><a href="/" style={styles.link}><i className="fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>


            <div style={styles.below}>
            <div>
                <h6>
                &copy; Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </div>
    );
}