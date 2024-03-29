import styles from './imagelistmodule.css';
import { Row, Col } from "antd";
import ImageItem from "../ImageItem";

export default function ImageList({ images }) {
    
    return (
        <div className={styles.imageLayout}>
            <div>
                <h1 className={styles.text}>IMAGES</h1>
                <hr className={styles.hrLine}></hr>    
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