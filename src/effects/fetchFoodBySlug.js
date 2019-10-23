import Axios from "axios";

export default slug => {
  return Axios.get("https://yh5x5.sse.codesandbox.io/api/food/", {
    slug: slug
  });
};
