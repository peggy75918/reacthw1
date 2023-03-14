export default function ImageItem({ image }){
    const styles = {
        item: {
            padding: 0,
            fontSize: '1rem',
        },
        imageLink: {

        },
        imageTitle: {
            color: 'white',
            right: '2rem',
            bottom: '0',
            fontWeight: '800',
            textTransform: 'uppercase',
            position: 'absolute',
        },

    };
    
    return(
        <div style={styles.item}>
            <a href="/" className="image__link">
                <img
                    style={{ width: '100%' }}
                    src={image.image}
                    alt="" 
                    className="image__style"/>
            </a>
            <p style={styles.imageTitle}>
                {image.image_title}
            </p>
        </div>
    );
}