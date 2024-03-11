# CORE: Enable CORS on BE repo

When making requests to your API from a React app, you will run into a Cross Origin Resource Sharing (CORS) error. The next thing to do is enable these requests in our back end.

In your back end repo, install the CORS package from npm:
`$ npm install cors`

In your app.js file, require in the package:
const cors = require('cors');

In your app.js file, have your app use the CORS middleware before any of your other middleware or routers:
`app.use(cors());`

Once you have made these changes, you will need to commit and push them to take effect in your hosted API:

`$ git add package.json package-lock.json app.js`
`$ git commit -m 'allow cross origin resource sharing'`
`$ git push origin main`

Check that your API has been re-deployed by going to the Events tab on Render. You should see a deploy for the commit you just made. If not, trigger a manual deploy.

