import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./styles.css";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`params: ${id}`} {`QS: ${qs.get("page")}`}
      </h1>
      <Outlet />
    </div>
  );
};
