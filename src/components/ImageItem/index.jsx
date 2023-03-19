import styles from './imageitem.module.css';

export default function ImageItem({ image }){
    
    return(
        <div className={styles.item}>
            <a href="/" className="image__link">
                <img
                    style={{ width: '100%' }}
                    src={image.image}
                    alt="" 
                    className="image__style"/>
            </a>
            <p className={styles.imageTitle}>
                {image.image_title}
            </p>
        </div>
    );
}