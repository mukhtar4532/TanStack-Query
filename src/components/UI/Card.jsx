export const Card = ({ post }) => {
  const { body, title } = post;
  return (
    <>
      <li className="border-l-3 bg-slate-900 w-1/2 min-h-24 m-2 flex flex-col justify-center">
        <p className=" border-slate-300 text-lg px-2 text-slate-200">
          <span className="font-semibold">Title:</span> {title}
        </p>
        <p className=" border-slate-300 text-lg px-2 text-slate-200">
          <span className="font-semibold">Body:</span> {body}
        </p>
      </li>
    </>
  );
};
