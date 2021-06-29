import * as pulumi from "@pulumi/pulumi";

const configPulumi = new pulumi.Config();

const env = pulumi.getStack();
export const cdnName = configPulumi.get("cdnName");
export const ttl = parseInt(configPulumi.get("ttl"));
export const mainBucket = `${cdnName}-bucket`;
export const suffix = `-${pulumi.getStack()}`;
export const generalTagName = cdnName || "deploy_cdn";
export const targetDomain = configPulumi.get("targetDomain");
export const certificateArn = configPulumi.get("certificateArn");
