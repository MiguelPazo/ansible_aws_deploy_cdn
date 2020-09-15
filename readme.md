This project is for deploy assets projects in aws. The credentials for jenkins are setter in the deploy script as environment variable.

For run locally, you have two options:

##### 1. Set enviroment variables:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

##### 2. Create config file in %userprofile%/.aws
Check this guide:
```
https://www.pulumi.com/docs/intro/cloud-providers/aws/setup/
```

##### 3. Set config variables
```
pulumi config set aws:profile profile
pulumi config set aws:region us-east-1
pulumi config set cdnName deploy-cdn
pulumi config set ttl 60
pulumi config set targetDomain domain.com
pulumi config set referenceCerts pulumi/stack
```
