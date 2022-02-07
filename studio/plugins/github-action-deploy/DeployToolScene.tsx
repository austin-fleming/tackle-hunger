import React, { useEffect, useState } from 'react';
import { PublishIcon } from '@sanity/icons';
import { Button, Box, Code, Flex, Heading, Stack, Spinner } from '@sanity/ui';
import { Deployments, DeploymentsTable } from './DeploymentsTable';
// import { responseData } from './responseData';

const ghaDeploy = '/api/github-action-deploy';

export const DeployToolScene = () => {
  const [deploying, setDeploying] = useState(false);
  const [deployments, setDeployments] = useState<Deployments>();

  /**
   * get list of 10 most recent deployments
   */
  const getRecentDeploys = async () => {
    try {
      setDeployments((await (await fetch(ghaDeploy)).json()).data);
    } catch (err) {
      // TODO: handle error better
      console.error(err);
      // setDeployments(responseData);
    }
  };

  const deploy = async () => {
    setDeploying(true);

    try {
      const createDeployRes = await (await fetch(ghaDeploy, { method: 'POST' })).json();

      if (createDeployRes?.status !== 204) throw new Error(createDeployRes);
    } catch (err) {
      console.error(err);
    }

    getRecentDeploys();
  };

  // On first load, get list of 10 most recent deployments & set to refresh it every 15 seconds
  useEffect(() => {
    getRecentDeploys();

    setInterval(() => {
      getRecentDeploys();
    }, 15000);
  }, []);

  // whenever deployments list refreshes, set deploying state based on latest one's status
  useEffect(() => {
    const { status } = deployments?.workflow_runs?.[0] || {};

    if (!status) return;

    if (status !== 'in_progress' && status !== 'queued') {
      setDeploying(false);
    } else {
      setDeploying(true);
    }
  }, [deployments]);

  return (
    <Box overflow='hidden' padding={4}>
      <Flex align='stretch' direction='row' justify='space-between' wrap='wrap-reverse'>
        <Stack height='fill' padding={4} space={4}>
          <Heading as='h1' size={4}>
            Deployment History
          </Heading>
          <Code as='h2' size={2}>
            [{deployments?.workflow_runs?.[0]?.name || 'fetching...'}]
          </Code>
        </Stack>
        <Box padding={4}>
          <Button
            disabled={deploying}
            fontSize={3}
            iconRight={!deploying && PublishIcon}
            padding={4}
            text={deploying ? 'Deployment Currently In Progress' : 'Deploy Now'}
            tone='primary'
            onClick={deploy}
          />
        </Box>
      </Flex>
      <Box overflow='auto'>
        {deployments ? (
          <DeploymentsTable {...deployments} />
        ) : (
          <Flex justify='center' padding={4}>
            <Spinner muted size={4} />
          </Flex>
        )}
      </Box>
    </Box>
  );
};
