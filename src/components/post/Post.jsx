import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Share a story to make readers want to know more
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Many online content creators have noted that including numbers or statistics in their headlines brings more traffic. It’s difficult to pin down why, but it could be the appeal in the clarity numbers provide. If a headline reads “25 cute pictures of kittens”, you know what you’re in for.
      While you certainly don’t want to start stuffing numbers into every one of your blog post titles, using them where they make sense is wise. If you’re going to offer any kind of list within your post, adding a number to the headline is an easy way to increase your chances of getting more clicks.
      </p>
    </div>
  );
}
