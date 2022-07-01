import fetch from 'node-fetch';
import ora from 'ora';

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

  const spinner = ora('Request to server...').start();
  fetch(url).then(async (response: any) => {
    const data = await response.json();
    spinner.succeed('DONE');

    if (options && options.pretty) {
      spinner.text = `RESULT: \n${JSON.stringify(data, null, 2)}`;
      spinner.info();
      spinner.stop();
      return;
    }

    spinner.text = `RESULT: \n${JSON.stringify(data)}`;
    spinner.info();
    spinner.stop();
  });
};
