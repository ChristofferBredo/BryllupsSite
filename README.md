# Prerequisites
## Grant User Access Administrator to app
Subcription needs to grant User Access Administrator permission to the application:

Go to `Subscription` > `Access control (IAM)` > `Add role assignment` > find `User Access Administrator` > click `Next` > select `User, group, or service principal` > click `+Select members` > type the apps name > select it from the list > click `Select` and then `Review + Assign`.

## Credenitals format
See https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-secret 

```
 {
      "clientId": "<Client ID>",
      "clientSecret": "<Client Secret>",
      "subscriptionId": "<Subscription ID>",
      "tenantId": "<Tenant ID>"
  }
```