export type AmplifyDependentResourcesAttributes = {
  "api": {
    "AdminQueries": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "vhshots": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "userPoolGroups": {
      "AdministratorsGroupRole": "string",
      "ClientsGroupRole": "string",
      "GuestsGroupRole": "string"
    },
    "vhshots": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "CreatedSNSRole": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "AdminQueries947dcd66": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "vhsContactFormFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3vhshotsstorage4c3a7943admin": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}