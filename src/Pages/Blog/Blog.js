import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h5><strong>QN-1: </strong>Difference between`authorization` and`authentication`</h5>
                <p><strong>Ans:</strong>Authentication verifies who the user is and Authorization determines what resources a user can access.
                    Authentication is the first step of a good identity and access management process and Authorization always takes place after authentication.
                    Authentication is visible to and partially changeable by the user and Authorization isn’t visible to or changeable by the user.
                </p>
            </div>
            <div>
                <h5><strong>QN-1: </strong>Why are you using `firebase`? What other options do you have to implement authentication?
                </h5>
                <p><strong>Ans:</strong>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
                <p> Other options to implement authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div>
                <h5><strong>QN-1: </strong>What other services does `firebase` provide other than authentication</h5>
                <p><strong>Ans:</strong>There are many services which Firebase provides, Most useful of them are:
                    Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.
                </p>
            </div>
        </div>
    );
};

export default Blog;