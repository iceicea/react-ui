import './posts.scss';
import Post from '../post/Post';
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'lvhaopost',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/2834348/pexels-photo-2834348.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis, harum quos quae accusamus amet omnis earum rem dolor deserunt!',
      img: 'https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      id: 2,
      name: 'lvhaopost',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/2834348/pexels-photo-2834348.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis, harum quos quae accusamus amet omnis earum rem dolor deserunt!',
      img: 'https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
  ];
  return (
    <div className="posts">
      {posts.map(post => {
        return <Post post={post} key={post.id}></Post>;
      })}
    </div>
  );
};

export default Posts;
