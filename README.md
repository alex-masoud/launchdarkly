# LaunchDarkly React SDK Feature Flag Implementation
### Simple Logo Switch Feature Flag Example
I've built a simple react app that demonstrates how LaunchDarkly's SDK works and how to implement a simple feature flag. This feature flag will switch between 2 different logos depending on if the feature flag is set to True or False.

Below, you'll find the insutrctions on how to build a simple React app and how to implement a feature flag with LaunchDarkly's SDK, but for more comprehensive instructions, you can visit [this guide](https://docs.launchdarkly.com/sdk/client-side/react?q=sdk).

Build instructions 


The React SDK is based on the JavaScript SDK. After you complete the Getting started process, follow [these instructions](https://docs.launchdarkly.com/sdk/client-side/react/react-web?q=sdk#getting-started) to start using the LaunchDarkly React SDK in your React code.It will automatically use the latest release of the LaunchDarkly SDK with major version 6.

Edit src/app.js and set the value of clientSideID to your LaunchDarkly Client-side ID. You can find your Client-side ID by going to your LaunchDarkly, Account Settings > Projects > select your porject name > grab the Client-side ID for the Environment you wish to use. 

After you've updated the above, on the command line, run npm run start to launch your react application. Since we haven't yet created the Feature Flag you should see a React Logo on the page and underneath reads "Welcome to Alex's Logo Switch Test."

To create the Feature Flag, go to Feature flags within LaunchDarkly app and click on Create Flag. You'll be prompted with multiple options, but for this example we'll use the Kill Switch option. Choose a Name for your feature flag and an optional description. On the next page, choose Boolean as your flag variation and update the names of the Variations to 'New Logo' for True and 'Old Logo' for False. Under the advanced configurations, ensure you select "SDKs using Client-side ID". Create Flag.

To test out the functionality of the feature flag, Toggle your new feature flag to ON. Go to your React application and refresh the page. You should see the logo change from the React logo to a LaunchDarkly logo.
