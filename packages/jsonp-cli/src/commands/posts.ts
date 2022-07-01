import fetch from 'node-fetch';

export interface PostsProps {
  postId?: string;
  options?: {
    pretty: boolean;
  };
}

export const posts = (props: PostsProps) => {
  const { postId, options } = props;
  let url = 'https://jsonplaceholder.typicode.com/posts';

  if (postId) url += `/${postId}`;

  return fetch(url).then(async (response: any) => {
    const data = await response.json();

    if (options && options.pretty) return console.info(data);

    return console.info(JSON.stringify(data));
  });
};
