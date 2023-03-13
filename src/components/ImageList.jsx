import { Row, Col } from "antd";

import ImageItem from "./ImageItem.jsx";
import images from "../json/images.json";

export default function ImageList() {
    const styles = {
        imageLayout: {
            backgroundColor: '#fff',
            fontSize: '1rem',
            textAlign: 'center',
        },
        text: {
            
        },
        hrLine: {
            width: '250px',
            borderTop: 'solid 5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.7',
            borderColor: '#2c3e50',
        },
    };
    
    return (
        <div style={styles.imageLayout}>
            <div>
                <h1 style={styles.text}>IMAGES</h1>
                <hr style={styles.hrLine}></hr>    
                <Row gutter={[32, 32]}>
                {images.map(image => (
                    <Col
                        key={image.id}
                        sm={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 6 }}
                    >
                        <ImageItem image={image} />
                    </Col>
                ))}
                </Row>
            </div>
        </div>    
    );
}