const dev = {
  STRIPE_KEY: "pk_test_s6V45DAQsAfLp4qYSUny60Uz00UkXLFxtT",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-react-notes-app-2-ap-attachmentsbucket-w4udkadjvj9t"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://j5xonk4os3.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "Id: eu-central-1_9SwWhZHZg",
    APP_CLIENT_ID: "1pbdfq92bts4crnji1gkcqsll9",
    IDENTITY_POOL_ID: "eu-central-1:50fa1265-800f-4352-9cb6-7159a993f91c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_s6V45DAQsAfLp4qYSUny60Uz00UkXLFxtT",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-react-notes-app-2-ap-attachmentsbucket-xzbebrp94u1a"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://a56mikyip9.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_Q2R9qMg8a",
    APP_CLIENT_ID: "6lasv17p2dcpispv5lpg97mt3j",
    IDENTITY_POOL_ID: "eu-central-1:2d79374f-348b-4e6e-9731-beabd26ac017"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
