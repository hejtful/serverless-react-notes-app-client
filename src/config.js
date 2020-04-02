export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-react-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://i88yjfhnsc.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_bCV9nOVKJ",
    APP_CLIENT_ID: "7feei7o62l0kn39ejgucqak798",
    IDENTITY_POOL_ID: "eu-central-1:3abf495d-7a32-4b8c-81f8-71298b562bb8"
  },
  STRIPE_KEY: "pk_test_s6V45DAQsAfLp4qYSUny60Uz00UkXLFxtT"
};
