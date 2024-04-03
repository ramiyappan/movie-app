# Movies App

<p>
Create a simple React Application for browsing movies from a public API and explore React concepts such as 
Hooks (useState, useEffect), Components, Props and more.
</p>

## Live Link
https://ramiyappan.github.io/movie-app/

## Usage

Download all files and navigate inside project folder

### Install Dependencies

    npm install

### Start App

    npm start

### Deploy App

    npm run deploy

## Steps to deploy to gh-pages

<ul>
<li>Install the gh-pages package by running the following command: </li><br>

    npm install gh-pages --save-dev

<li>Configure package.json file by adding these following lines: </li><br>

    "homepage": "https://your-username.github.io/your-repo-name",
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }

<li>Replace your-username with your GitHub username and your-repo-name with the name of your repository. </li>

<li>Deploy your app by running:</li><br>

```
npm run deploy
```

> This will create a new branch called gh-pages in your repository and push the built files from the build directory to that branch.

<li>Enable GitHub Pages: Go to your repository on GitHub and navigate to the "Settings" tab. Scroll down to the "GitHub Pages" section 
    and select the gh-pages branch as the source for your GitHub Pages site. </li>

<li>Access your deployed app: After a few moments, your React app should be deployed and accessible at the URL mentioned 
    in the "GitHub Pages" section of your repository settings.</li>
