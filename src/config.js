export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-f998f9qb1shh"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://5z5r0pjp9l.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_zUtreJas4",
      APP_CLIENT_ID: "6ifik4hvnk0g985ejlr7q4iojn",
      IDENTITY_POOL_ID: "us-east-2:b8398710-74f6-4829-9487-db23f7b273b0"
                         
    },
    STRIPE_KEY: "pk_test_51HCc6zDrw30tTuJtPDavkz6fp1aotrernwVh367COgK8ZtPXTkncgRyExK5iGM90kYkivovkRguhvQoJL4GY6Czc00ZH3MM66s",
    MAX_ATTACHMENT_SIZE: 5000000
  };