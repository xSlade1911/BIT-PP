import { postsEndpoint } from "../shared/constants";
import { get } from "./APIService";
import { Post } from "../entities/Post";

    const getPosts = () =>  {
        return get(postsEndpoint)
            .then((response) => {
                return response.map((post) => {
                    const title = post.title;
                    const subtitle = post.subtitle;
                    const text = post.text;
                    const imageUrl = post.imageUrl;
                    const createdAt = post.createdAt;

                    const myPost = new Post(title, subtitle, text, imageUrl, createdAt);
                    return myPost;
                })
            })
    }

export { getPosts }