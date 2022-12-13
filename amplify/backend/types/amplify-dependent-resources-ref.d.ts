export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "vhshots": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        },
        "userPoolGroups": {
            "GuestsGroupRole": "string",
            "ClientsGroupRole": "string",
            "AdministratorsGroupRole": "string"
        }
    },
    "storage": {
        "s3vhshotsstorage4c3a7943admin": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueries947dcd66": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}