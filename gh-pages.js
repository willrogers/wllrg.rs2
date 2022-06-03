import { publish } from 'gh-pages';

console.log("Deploying with gh-pages ...")
publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/willrogers/wllrg.rs2',
        user: {
            name: 'Will Rogers',
            email: 'wahrogers@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy complete!');
    }
);