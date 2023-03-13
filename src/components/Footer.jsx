export default function Footer(){
    const styles = {
        above: {
            backgroundColor: '#2c3e50',
            color: 'white',
            textAlign: 'center',
        },
        content: {
            paddingTop: '50px',
            paddingBottom: '50px',
            display: 'flex',
            justifyContent: 'center',
        },
        description: {
            margin: 0,
            textAlign: 'center',
            alignSelf: 'center',
            
        },
        list: {
            listStyle: 'none',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            
        },
        item: {
            padding: '0 10px',
            alignSelf: 'center',
        },
        link: {
            color:' white',
            textDecoration: 'none',
            display: 'inline-block',
            width: '50px',
            height: '50px',
            border: '2px solid #fff',
            borderRadius: '100%',
            textAlign: 'center',
            fontSize: '20px',
            lineHeight: '45px',
        },
        below: {
            backgroundColor: '#233140',
            color: 'white',
            padding: '25px 0',
            textAlign: 'center',
        },
    };
    
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