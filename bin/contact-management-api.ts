#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ContactManagementApiStack } from '../lib/contact-management-api-stack';

const app = new cdk.App();
new ContactManagementApiStack(app, 'ContactManagementApiStack');
