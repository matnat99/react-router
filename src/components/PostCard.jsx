export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="card-header">
        <h4>{post.title}</h4>
      </div>
      <div className="card-body">
        <div className="card-img">
          <img src={post.image} alt={post.title} />
        </div>
        <p>{post.content}</p>
        <ul className="tags-list">
          {post.tags.map((tag, index) => (
            <li key={index}>
              <a href="#">#{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
