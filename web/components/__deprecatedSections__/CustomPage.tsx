import React from 'react';
import { Layout } from '../components/Layout';

const CustomPage: React.FC<{ config: Record<string, unknown> }> = ({ config }) => (
  <Layout config={config}>
    <h1>A custom page</h1>
  </Layout>
);

export default CustomPage;
