import {axioService} from "./axioService";
import {urls} from "../Constants/urls";

const postService = {
    getAll: () => axioService.get(urls.posts.base),
    getbyId: (id)=> axioService.get(urls.posts.byId(id))
}

export {
    postService
}