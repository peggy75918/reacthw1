export default function Description() {
    const styles = {
        description: {
            backgroundColor: '#00979c',
            paddingTop: '50px',
            paddingBottom: '50px',
            textAlign: 'center',
            color: 'white',
        },
        hrLine: {
            width: '250px',
            borderTop: 'solid 5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.7',
            borderColor: '#fff',
        },
        text: {
            textIndent: '2rem',
            color: 'white',
        },
    };
    
    return (
        <div style={styles.description}>
            <div>
            <h1>DESCRIPTIONS</h1>
            <hr style={styles.hrLine} />
            <p style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                    corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                    unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                    ullam
                    eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                    quod
                    quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                    dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                    tempora.
                    Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                    repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
            </div>
        </div>
    );
}