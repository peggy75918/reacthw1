import { Grid } from 'antd';
const { useBreakpoint } =Grid;

export default function Header({ title, slogan }) {
    const { sm } = useBreakpoint();
    const styles = {
        header: {
            textAlign: 'center',
            backgroundColor: '#00979c',
        },
        headerAvatar: {
            width: '10rem',
            height: '10rem',
        },
        headerTitle: {
            fontSize: sm ? '3rem' : '2rem',
            color: '#fff',
            fontWeight: '200',
        },
        hrHeaderLine: {
            width: '250px',
            borderTop: 'solid 5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.7',
            borderColor: '#fff',
        },
        headerSlogan: {
            fontSize: sm ? '1.75rem' : '1.25rem',
            color: '#fff',
            margin: '0',
        },
    }


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