import fetch from 'node-fetch';

export interface UsersProps {
  userId?: string;
  options?: {
    pretty: boolean;
  };
}

export const users = (props: UsersProps) => {
  const { userId, options } = props;
  let url = 'https://jsonplaceholder.typicode.com/users';

  if (userId) url += `/${userId}`;

  fetch(url).then(async (response: any) => {
    const data = await response.json();

    if (options && options.pretty) return console.log(data);

    return console.log(JSON.stringify(data));
  });
};
