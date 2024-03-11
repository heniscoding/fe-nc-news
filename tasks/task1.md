# CORE: Create a React project and a public repo

You may have noticed that this sprint does not have an associated repo. When you fork a repo from Northcoders, it will be set to private. As this project will need to be public, the first thing to do is to create a public repo for it.

## Create a repo locally
Navigate to the directory you normally keep your sprints in, and use Vite to start a new React project locally on your machine. You will then need to initialise git in the root of your project.

`$ cd nc-news`
`$ git init`

## Create a public repo on GitHub
From the GitHub homepage, click the "New repository" button.
Name your new repo with the same name as the React app you created earlier.

Make sure you don't create a new README.md or .gitignore as this will conflict with your own.
Add this repo as a remote to your local React project. The link is the same one you would use when cloning a repo.

`$ cd nc-news`
`$ git remote add origin https://github.com/your-username/nc-news.git`

Note: If you make a mistake here, you can change the URL of an existing remote with:

`$ git remote set-url origin https://github.com/your-username/nc-news.git`

Finally, push your initial React app to the public repo on GitHub:

`$ git push origin main`
Make sure to share a link to your GitHub repo using the /nchelp pr command on Slack.

