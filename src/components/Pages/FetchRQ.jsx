import { fetchPost } from "../../API/api";
import { Card } from "../UI/Card.jsx";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // work as useState only for understanding not in actual
    queryFn: fetchPost, // work as useEffect only for understanding not in actual
  });

  if (isLoading) return <p>Loading.....</p>;
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <ul className=" bg-slate-700 text-white flex flex-col gap-3 justify-center items-center">
        {data?.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
};
