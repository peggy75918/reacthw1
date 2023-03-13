import Header from "../components/Header";
import ImageList from "../components/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer";
import images from "../json/images.json";

function Home(){
    return (
        <div className="container" style={styles.mainLayout}>
            <Header
                style={styles.layoutHeader}
                title="NAME"
                slogan="SLOGAN"
            />
            <ImageList
                style={styles.layoutContent}
                images={images}
            />
            <Description style={styles.layoutDescription}/>
            <Footer style={styles.layoutFooter} />
        </div>
    );
}

const styles = {
    mainLayout: {
        display: 'grid',
        minHeight: '100vh',
        gridTemplateAreas: `
        'header'
        'content'
        'description'
        'footer'
        `,
        gridTemplateRows: 'auto 1fr auto',
        gap: '1em',
    },
    layoutHeader: {
        gridArea: 'header',
        height: '30vh',
        color: '#fff',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    layoutContent: {
        gridArea: 'content',
        position: 'relative',
    },
    layoutDescription: {
        gridArea: 'dedescription',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: 'white',
        backgroundColor: '#00979c',
    },
    layoutFooter: {
        gridArea: 'footer',
        
    }
}

export default Home;