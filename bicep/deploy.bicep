param environment string

param location string = resourceGroup().location
var storageAccountName =  '${environment}bryllupstorage'

resource bryllupstorage 'Microsoft.Storage/storageAccounts@2022-05-01' = {
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  name: storageAccountName
  location: location
  tags: {
    Owner: 'Bredo'
    Project: 'bryllupsite'
    Environment: environment
  }
  properties: {
    defaultToOAuthAuthentication: false
    publicNetworkAccess: 'Enabled'
    allowCrossTenantReplication: false
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: true
    allowSharedKeyAccess: true
    networkAcls: {
      bypass: 'AzureServices'
      virtualNetworkRules: []
      ipRules: []
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: false
    encryption: {
      requireInfrastructureEncryption: false
      services: {
        file: {
          keyType: 'Account'
          enabled: true
        }
        blob: {
          keyType: 'Account'
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    accessTier: 'Hot'
    customDomain: {
      name: environment == 'prod' ? 'bryllup.christofferbredo.dk' : '${environment}.bryllup.christofferbredo.dk'
    }
  }
}

resource WebContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2022-05-01' = {
  name: '${bryllupstorage.name}/default/$web'
}
