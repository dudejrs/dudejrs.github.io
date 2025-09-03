export default function ({data, Item, type, style}) {
    return (
        <div style={style}>
            {data.map((d, i) => (
                <Item type={type} key={i} d={d} i={i} />
            ))}
        </div>
    );
}
