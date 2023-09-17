import Bookmark from "../Bookmark/Bookmark";

const History = ({readTime, bookmark}) => {
    
    return (
        <div className="ml-6 mt-12">
            <div>
                <h2 style={{borderRadius: '8px', border: '1px solid #6047EC',  background: 'rgba(96, 71, 236, 0.10)', padding: '20px 48px', textAlign: 'center', color: '#6047EC'}} className="text-xl font-bold">Spent time on read : {readTime} min</h2>
            </div>
            <div style={{marginTop: '24px', borderRadius: '8px', background: 'rgba(17, 17, 17, 0.05)', padding: '30px'}}>
                <h2 className="text-xl font-bold text-center">Bookmarked Blogs: {bookmark.length}</h2>
                {
                    bookmark.map(b => <Bookmark key = {b.id} b = {b}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default History;