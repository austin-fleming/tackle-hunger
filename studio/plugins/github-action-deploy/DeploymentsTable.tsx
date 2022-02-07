import React from 'react';

const formatTime = (t: string): string => new Date(t).toLocaleString();

const gha = 'https://github.com/TackleHunger/sanity-marketing-tacklehunger.org/actions';

const tdStyle = { border: '1px solid', padding: '1.5rem' };

const thStyle = {
  ...tdStyle,
  borderBottom: '2px solid',
  padding: '0.75rem 2rem',
  width: '16.66%',
};

type WorkflowRun = {
  conclusion?: string;
  created_at: string;
  html_url: string;
  id: number;
  name: string;
  status: string;
  updated_at: string;
};

export type Deployments = {
  total_count: number;
  workflow_runs: WorkflowRun[];
};

export const DeploymentsTable: React.FC<Deployments> = ({ workflow_runs }) => (
  <table
    style={{
      borderCollapse: 'collapse',
      border: '3px solid',
      margin: '1.5rem auto',
      padding: '1.5rem',
      tableLayout: 'fixed',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      width: '100%',
      minWidth: '865px',
    }}>
    <tbody>
      <tr>
        <th scope='col' style={{ ...thStyle, width: '25%' }}>
          Initiated At
        </th>
        <th scope='col' style={thStyle}>
          Status
        </th>
        <th scope='col' style={thStyle}>
          Conclusion
        </th>
        <th scope='col' style={{ ...thStyle, width: '25%' }}>
          Updated/Finished At
        </th>
        <th scope='col' style={thStyle}>
          GitHub Link
        </th>
      </tr>
      {workflow_runs?.length ? (
        <React.Fragment>
          {workflow_runs.map(({ conclusion, created_at, html_url, id, status, updated_at }, i) => (
            <tr key={id} style={{ backgroundColor: i % 2 ? 'whitesmoke' : 'lightgrey' }}>
              <td style={tdStyle}>{formatTime(created_at)}</td>
              <td style={tdStyle}>{status}</td>
              <td style={tdStyle}>{conclusion || ''}</td>
              <td style={tdStyle}>{formatTime(updated_at)}</td>
              <td style={tdStyle}>
                <a href={html_url} rel='noreferrer' target='_blank'>
                  VIEW
                </a>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} style={tdStyle}>
              <em>
                Showing 10 most recent deployments. Visit{' '}
                <a href={gha} rel='noreferrer' target='_blank'>
                  GitHub
                </a>{' '}
                to view more.
              </em>
            </td>
          </tr>
        </React.Fragment>
      ) : (
        <tr>
          <td colSpan={5} style={tdStyle}>
            No Deployments To Display (see whats wrong on{' '}
            <a href={gha} rel='noreferrer' target='_blank'>
              GitHub
            </a>
            )
          </td>
        </tr>
      )}
    </tbody>
  </table>
);
