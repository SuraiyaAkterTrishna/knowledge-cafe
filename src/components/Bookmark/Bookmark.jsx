
const Bookmark = ({b}) => {
    const {title} = b;
    return (
        <div className="my-4 font-bold" style={{borderRadius: '8px', background: '#FFF', padding: '20px'}}>
            <h4>{title}</h4>
        </div>
    );
};

export default Bookmark;