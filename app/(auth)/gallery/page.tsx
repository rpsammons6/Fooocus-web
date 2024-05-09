import '../../css/mason.module.css';

interface Item {
    id: number;
    height: number;
    src: string;
}

const MasonryLayout = ({items}: {items: Item[]}) => {
    return (
        <div className="mason-layout">
            {items.map((item: Item) => (
                <div className="mason-item" key={item.id} style={{height: `${item.height}px`}}>
                    <img src={item.src} alt="" />
                </div>
            ))}
        </div>
    );
}

const Showcase = () => {
    const items: Item[] = [
        {id: 1, height: 100, src: '/gallery/IMG1.webp'},
        {id: 2, height: 100, src: '/gallery/IMG2.webp'},
        {id: 3, height: 100, src: '/gallery/IMG3.webp'},
    ];
    return (
        <div className="mason">
            <MasonryLayout items={items} />
        </div>
    );
}

export default Showcase