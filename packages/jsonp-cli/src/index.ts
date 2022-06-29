import { Command } from 'commander';
import { posts, comments, users } from './commands';

const cli = new Command();

/*
 * CLI Information.
 */
cli.name('jsonp');
cli.description('Access the JSON Placeholder API');
cli.version('0.1.0');
cli.usage('<command>');
cli.addHelpCommand(false);
cli.helpOption(false);

/*
 * Posts Commands
 */
cli
  .command('posts')
  .argument('[postId]', "ID of post you'd like to retrieve.")
  .option('-p, --pretty', 'Pretty-print output from the API')
  .description(
    'Retrieve a list of all posts or one post by passing the post ID (e.g., posts 1).'
  )
  .action((postId, options) => posts({ postId, options }));

/*
 * Posts Commands
 */
cli
  .command('comments')
  .option('-p, --pretty', 'Pretty-print output from the API')
  .description('Retrieve a list of all comments')
  .action((options) => comments({ options }));

/*
 * Users Commands
 */
cli
  .command('users')
  .argument('[userId]', "ID of the user you'd like to retrieve.")
  .option('-p, --pretty', 'Pretty-print output from the API.')
  .description(
    'Retrieve a list of all users or one user by passing the user ID (e.g., users 1).'
  )
  .action((userId, options) => users({ userId, options }));

cli.parse();
