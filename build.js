// Build command for index.html and css files

import shell from 'shelljs';

shell.echo('Start building HTML and CSS files...');

shell.echo('COPY index.html');
shell.cp('./src/public/index.html', './dist/public/index.html');

shell.echo('COPY index.css');
shell.cp('./src/public/index.css', './dist/public/index.css');

shell.echo('COPY bootstrap.min.css');
shell.cp('./node_modules/bootstrap/dist/css/bootstrap.min.css', './dist/public/bootstrap.min.css');

shell.echo('Building HTML and CSS files: done');