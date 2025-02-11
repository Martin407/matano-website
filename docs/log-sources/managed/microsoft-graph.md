---
title: Microsoft Graph
sidebar_position: 7
---

The Microsoft Graph managed log source allows you to collect various audit, reporting, and other logs from Microsoft 365 directly into Matano

## Prerequisites

To get started with the Microsoft Graph managed log source, follow these steps:

- [Create an Azure Active Directory application](https://learn.microsoft.com/en-us/graph/toolkit/get-started/add-aad-app-registration) to be able to access the Microsoft Graph API.
- [Grant admin consent to the application](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal) so that the credentials can be accessed programmatically.
- [Grant relevant permissions to the application](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#assign-app-roles-to-applications). These will depend on the tables you want to use, but at a minimum `AuditLog.Read.All` and `Directory.Read.All` permissions are required.
- [Create an application secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#option-2-create-a-new-application-secret) for the application. Matano will use these credentials to access the Microsoft Graph API.
- Make note of your Tenant ID, Client ID, and Client secret.

## Usage

Use the Microsoft Graph managed log source by specifying the `managed.type` property in your `log_source` as `MSFT`.

```yml
# log_source.yml
name: msft

managed:
  type: MSFT
  properties:
    client_id: "a6a67fa7-5859-4049-810c-56064b625571"
    tenant_id: "91615f41-f094-4894-acfa-feef044fb180"
```

For the tables you would like to enable for this managed log source, under a `tables/` subdirectory in your log source directory, create a file with the name `<table_name>.yml>`. For example:

```
my-matano-dir/
└── log_sources/
    └── msft/
        └── log_source.yml
        └── tables/
            └── aad_signinlogs.yml
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../configuration.md).

### Secret

To finish onboarding the log source, populate the `client_secret` key in the secret generated by Matano in AWS Secrets Manager, with the value of the Azure Active Directory application secret.

## Tables

The Microsoft Graph managed log source supports the following tables:

<div >

|       Table       |    Identifier    |                                    Description                                    |
| :---------------: | :--------------: | :-------------------------------------------------------------------------------: |
| [Sign-in Logs][1] | `aad_signinlogs` | Review errors and patterns in Azure Active Directory (Azure AD) sign in activity. |
| [Audit Logs][1] | `aad_auditlogs` | Every logged event in Azure AD, including changes to applications, groups, users, and licenses. |

</div>

[1]: https://learn.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins
[2]: https://learn.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-audit-logs

## Ingest

### Pull (default)

Matano integrates with Microsoft Graph to automatically pull relevant logs on a regular basis (every 1 min).

## Schema

Microsoft Graph event data is normalized to ECS fields. Custom fields are normalized into the `azure` field. You can view the [complete mappings][3] to see the full schema.

[3]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/msft/tables/
