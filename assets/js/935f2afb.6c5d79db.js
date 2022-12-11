"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/","docId":"index"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"link","label":"Getting started","href":"/docs/getting-started","docId":"getting-started"},{"type":"link","label":"Matano directory","href":"/docs/matano-directory","docId":"matano-directory"},{"type":"category","label":"Log sources","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Ingestion","href":"/docs/log-sources/ingestion","docId":"log-sources/ingestion"},{"type":"link","label":"Transformation","href":"/docs/log-sources/transformation","docId":"log-sources/transformation"},{"type":"link","label":"Log source configuration","href":"/docs/log-sources/configuration","docId":"log-sources/configuration"},{"type":"link","label":"Log source schema","href":"/docs/log-sources/schema","docId":"log-sources/schema"},{"type":"category","label":"Managed Log sources","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"CloudTrail","href":"/docs/log-sources/managed-log-sources/cloudtrail","docId":"log-sources/managed-log-sources/cloudtrail"},{"type":"link","label":"Zeek","href":"/docs/log-sources/managed-log-sources/zeek","docId":"log-sources/managed-log-sources/zeek"}],"href":"/docs/log-sources/managed-log-sources/"}],"href":"/docs/log-sources/"},{"type":"category","label":"Tables","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/docs/tables/overview","docId":"tables/overview"}]},{"type":"category","label":"Detections","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Authoring detections","href":"/docs/detections/authoring","docId":"detections/authoring"},{"type":"link","label":"Importing from Sigma rules","href":"/docs/detections/importing-from-sigma-rules","docId":"detections/importing-from-sigma-rules"},{"type":"link","label":"Remote cache","href":"/docs/detections/remote-cache","docId":"detections/remote-cache"},{"type":"category","label":"Realtime alerting","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Configuring alerts","href":"/docs/detections/alerting/configuring-alerts","docId":"detections/alerting/configuring-alerts"},{"type":"link","label":"Working with alerts","href":"/docs/detections/alerting/working-with-alerts","docId":"detections/alerting/working-with-alerts"}],"href":"/docs/detections/alerting/"}],"href":"/docs/detections/"},{"type":"category","label":"Enrichment tables","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/enrichment/overview","docId":"enrichment/overview"},{"type":"link","label":"Working with enrichment tables","href":"/docs/enrichment/working-with-enrichment-tables","docId":"enrichment/working-with-enrichment-tables"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Matano configuration file reference","href":"/docs/reference/matano-configuration-file","docId":"reference/matano-configuration-file"},{"type":"link","label":"Matano CLI reference","href":"/docs/reference/cli-reference","docId":"reference/cli-reference"}]}]},"docs":{"detections/alerting/configuring-alerts":{"id":"detections/alerting/configuring-alerts","title":"Configuring alerts","description":"Deduplicating alerts","sidebar":"tutorialSidebar"},"detections/alerting/index":{"id":"detections/alerting/index","title":"Realtime alerting","description":"You can use detections to implement realtime alerting on your data. When a positive detection is encountered (i.e. a detection for which your detect function returned True), a rule match is created. Rule matches are used to create alerts.","sidebar":"tutorialSidebar"},"detections/alerting/working-with-alerts":{"id":"detections/alerting/working-with-alerts","title":"Working with alerts","description":"Alerts Matano table","sidebar":"tutorialSidebar"},"detections/authoring":{"id":"detections/authoring","title":"Authoring detections","description":"Each detection you create occupies a directory under the detections/ directory in your Matano directory.","sidebar":"tutorialSidebar"},"detections/importing-from-sigma-rules":{"id":"detections/importing-from-sigma-rules","title":"Importing from Sigma rules","description":"Sigma is a popular open source vendor agnostic format for writing detection rules in a YAML-based signature format. You can import Sigma rules into Matano Python detections.","sidebar":"tutorialSidebar"},"detections/index":{"id":"detections/index","title":"Detections","description":"To react to your security data in realtime in Matano, you work with detections. Matano lets you define detections as code (DaaC). A detection is a Python program that is invoked with data from a log source in realtime and can create an alert.","sidebar":"tutorialSidebar"},"detections/remote-cache":{"id":"detections/remote-cache","title":"Remote cache","description":"You can use a remote cache in your detections to persist and retrieve values by a key. This gives you a powerful way to be able to retain context and perform correlation across your detections.","sidebar":"tutorialSidebar"},"enrichment/overview":{"id":"enrichment/overview","title":"Enrichment tables overview","description":"You can use enrichment tables to enrich your data and alerts inside Matano. Enrichment tables let you incorporate external, custom data sources and threat intelligence data into your data, detections, and alerting. For example, you can use an enrichment table of user account data to map the user ID in log data to an entry in the enrichment table, and retrieve other attributes of that user. You can also use enrichment tables to ingest threat intelligence data, including Indicators of Compromise (IoCs), from external feeds and sources.","sidebar":"tutorialSidebar"},"enrichment/working-with-enrichment-tables":{"id":"enrichment/working-with-enrichment-tables","title":"Working with enrichment tables","description":"Creating an enrichment table","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting started","description":"Deployment","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Introduction","description":"What is Matano?","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Matano always runs in your AWS account. You use the Matano CLI to deploy Matano and manage your installation.","sidebar":"tutorialSidebar"},"log-sources/configuration":{"id":"log-sources/configuration","title":"Log source configuration","description":"Configuring log sources","sidebar":"tutorialSidebar"},"log-sources/index":{"id":"log-sources/index","title":"Log sources","description":"To store your data in Matano, you work with log sources. A log source represents log data from a specific source.","sidebar":"tutorialSidebar"},"log-sources/ingestion":{"id":"log-sources/ingestion","title":"Ingestion","description":"You can ingest data from any log source using Matano. To ingest a log source into Matano, you can use either S3 or SQS ingestion.","sidebar":"tutorialSidebar"},"log-sources/managed-log-sources/cloudtrail":{"id":"log-sources/managed-log-sources/cloudtrail","title":"CloudTrail","description":"The CloudTrail Matano managed log source lets you ingest your AWS CloudTrail logs directly into Matano.","sidebar":"tutorialSidebar"},"log-sources/managed-log-sources/index":{"id":"log-sources/managed-log-sources/index","title":"Managed Log sources","description":"Matano managed log sources are common log sources for which Matano provides preconfigured normalizations, transformations, and schemas. This lets you easily ingest logs from a supported log source without having to write a transformation or specify a schema.","sidebar":"tutorialSidebar"},"log-sources/managed-log-sources/zeek":{"id":"log-sources/managed-log-sources/zeek","title":"Zeek","description":"The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano.","sidebar":"tutorialSidebar"},"log-sources/schema":{"id":"log-sources/schema","title":"Log source schema","description":"You define the shape of your log source\'s data by defining a schema.","sidebar":"tutorialSidebar"},"log-sources/transformation":{"id":"log-sources/transformation","title":"Transformation","description":"Matano allows you to transform your data into a normalized form. The transformation is specified using the Vector ReMap Language (VRL).","sidebar":"tutorialSidebar"},"matano-directory":{"id":"matano-directory","title":"Matano directory","description":"To specify configuration and data for Matano, you use a Matano directory. This directory has the following structure:","sidebar":"tutorialSidebar"},"reference/cli-reference":{"id":"reference/cli-reference","title":"Matano CLI reference","description":"Commands","sidebar":"tutorialSidebar"},"reference/matano-configuration-file":{"id":"reference/matano-configuration-file","title":"Matano configuration file reference","description":"The Matano configuration file stores configuration around your matano deployment. The file is named matano.config.yml and lives at the root of your Matano directory.","sidebar":"tutorialSidebar"},"tables/overview":{"id":"tables/overview","title":"Matano Tables overview","description":"All Matano data is stored as Apache Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg.","sidebar":"tutorialSidebar"}}}')}}]);