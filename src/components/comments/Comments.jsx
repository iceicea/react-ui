import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum natus mollitia magnam, similique facilis pariatur eveniet reprehenderit omnis necessitatibus beatae!',
      name: 'lvhaocomments',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/2914287/pexels-photo-2914287.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      id: 2,
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum natus mollitia magnam, similique facilis pariatur eveniet reprehenderit omnis necessitatibus beatae!',
      name: 'lvhaocomments',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/2914287/pexels-photo-2914287.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map(comment => {
        return (
          <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
