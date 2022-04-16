import GetApi from "./get";
import PostApi from "./post";
import DeleteApi from "./delete";

const getNewsBlog = () => GetApi('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDiKirim) => PostApi('posts', dataYgDiKirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteApi('posts', dataYgDiHapus);


const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;