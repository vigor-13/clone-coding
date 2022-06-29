import fetch from 'node-fetch';

export interface CommentsProps {
  options?: {
    pretty: boolean;
  };
}

export const comments = (props: CommentsProps) => {
  const { options } = props;

  fetch('https://jsonplaceholder.typicode.com/comments').then(
    async (response: any) => {
      const data = await response.json();

      if (options && options.pretty) return console.log(data);

      return console.log(JSON.stringify(data));
    }
  );
};
