import Accordian from '../../../../components/ui/accordian';

function onClick(key, active, setActived) {
    if (active) {
        setActived(null);
        return;
    }
    setActived(key);
}

function Header({active, type, data}) {
    return <>{!active && `${data.length}개의 ${type}`}</>;
}

export default function ItemHolder({
    i: key,
    d: data,
    active,
    setActived,
    Items,
    Item,
    className,
}) {
    const [type, d] = data;

    if (data[1].length == 0) {
        return <> </>;
    }

    return (
        <div className={className} style={{width: '100%'}}>
            <Accordian
                onClick={() => onClick(key, active, setActived)}
                header={<Header type={type} active={active} data={d} />}
                active={active}
                height={450}
                style={{zIndex: 3}}
            >
                <Items type={type} data={d} Item={Item} />
            </Accordian>
        </div>
    );
}
