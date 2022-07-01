import fetch from 'node-fetch';
import ora from 'ora';

export interface CommentsProps {
  options?: {
    pretty: boolean;
  };
}

export const comments = (props: CommentsProps) => {
  const { options } = props;

  const spinner = ora('Request to server...').start();
  fetch('https://jsonplaceholder.typicode.com/comments').then(
    async (response: any) => {
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
    }
  );
};
