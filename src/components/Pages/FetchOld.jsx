import { useEffect, useState } from "react";
import { fetchPost } from "../../API/api";
import { Card } from "../UI/Card.jsx";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetchPost();
      console.log(res.data);

      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <ul className=" bg-slate-700 text-white flex flex-col gap-3 justify-center items-center">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </ul>
    </>
  );
};
