import React, { useEffect, useState } from 'react';
import { PublishIcon } from '@sanity/icons';
import { Button, Spinner } from '@sanity/ui';

const twoMinutes = 2 * 60 * 1000;

const DeployTitle = () => {
  const [deploying, setDeploying] = useState(false);

  useEffect(() => {
    if (deploying) setTimeout(() => setDeploying(false), twoMinutes);
  }, [deploying]);

  return (
    <Button
      fontSize={1}
      icon={deploying ? Spinner : PublishIcon}
      padding={3}
      text={`Deploy${deploying ? 'ing' : ''} (last deployed: ${'...'})`}
      tone='primary'
      onClick={async () => {
        if (!deploying) setDeploying(true);

        // TODO: call github API
        const response = await fetch('/api/github-action-deploy');

        console.log(await response.json());
      }}
    />
  );
};

export default DeployTitle;

/**
 * Couple of things to note:
 * - width and height is set to 1em
 * - fill is `currentColor` - this will ensure that the icon looks uniform and
 *   that the hover/active state works. You can of course render anything you
 *   would like here, but for plugins that are to be used in more than one
 *   studio, we suggest these rules are followed
 */
// export default () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 250 250">
//     <path fill="none" stroke="currentColor" strokeWidth="40" d="M5 5h240v240H5z" />
//   </svg>
// )
