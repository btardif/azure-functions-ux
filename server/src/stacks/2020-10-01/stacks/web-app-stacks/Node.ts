import { WebAppStack } from '../../models/WebAppStackModel';
import { getDateString } from '../date-utilities';

const getNodeStack: (useIsoDateFormat: boolean) => WebAppStack = (useIsoDateFormat: boolean) => {
  const node16EOL = getDateString(new Date(2024, 4, 30), useIsoDateFormat);
  const node14EOL = getDateString(new Date(2023, 4, 30), useIsoDateFormat);
  const node12EOL = getDateString(new Date(2022, 4, 1), useIsoDateFormat);
  const node10EOL = getDateString(new Date(2021, 4, 1), useIsoDateFormat);
  const node9EOL = getDateString(new Date(2019, 6, 30), useIsoDateFormat);
  const node8EOL = getDateString(new Date(2019, 12, 31), useIsoDateFormat);
  const node7EOL = getDateString(new Date(2017, 6, 30), useIsoDateFormat);
  const node6EOL = getDateString(new Date(2019, 4, 30), useIsoDateFormat);
  const node4EOL = getDateString(new Date(2018, 4, 30), useIsoDateFormat);

  return {
    displayText: 'Node',
    value: 'node',
    preferredOs: 'linux',
    majorVersions: [
      {
        displayText: 'Node LTS',
        value: 'lts',
        minorVersions: [
          {
            displayText: 'Node LTS',
            value: 'lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|lts',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 18',
        value: '18',
        minorVersions: [
          {
            displayText: 'Node 18 LTS',
            value: '18-lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|18-lts',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '18.x',
                },
                isHidden: true,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '~18',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '18.x',
                },
                isHidden: true,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 16',
        value: '16',
        minorVersions: [
          {
            displayText: 'Node 16 LTS',
            value: '16-lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|16-lts',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '16.x',
                },
                endOfLifeDate: node16EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '~16',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '16.x',
                },
                endOfLifeDate: node16EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 14',
        value: '14',
        minorVersions: [
          {
            displayText: 'Node 14 LTS',
            value: '14-lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|14-lts',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '14.x',
                },
                endOfLifeDate: node14EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '~14',
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '14.x',
                },
                endOfLifeDate: node14EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 12',
        value: '12',
        minorVersions: [
          {
            displayText: 'Node 12 LTS',
            value: '12-lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|12-lts',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '12.x',
                },
                endOfLifeDate: node12EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '12.13.0',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node12EOL,
              },
            },
          },
          {
            displayText: 'Node 12.9',
            value: '12.9',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|12.9',
                isDeprecated: true,
                remoteDebuggingSupported: true,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '12.x',
                },
                endOfLifeDate: node12EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 10',
        value: '10',
        minorVersions: [
          {
            displayText: 'Node 10 LTS',
            value: '10-LTS',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10-lts',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.16',
            value: '10.16',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.16',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.15',
            value: '10.15',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '10.15.2',
                isDeprecated: true,
                isPreview: true,
                isHidden: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.14',
            value: '10.14',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.14',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '10.14.1',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.12',
            value: '10.12',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.12',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.10',
            value: '10.10',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.10',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '10.0.0',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.6',
            value: '10.6',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.6',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '10.6.0',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
          {
            displayText: 'Node 10.1',
            value: '10.1',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|10.1',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                  supportedVersion: '10.x',
                },
                endOfLifeDate: node10EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 9',
        value: '9',
        minorVersions: [
          {
            displayText: 'Node 9.4',
            value: '9.4',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|9.4',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node9EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 8',
        value: '8',
        minorVersions: [
          {
            displayText: 'Node 8 LTS',
            value: '8-lts',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8-lts',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.12',
            value: '8.12',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.12',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.11',
            value: '8.11',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.11',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '8.11',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.10',
            value: '8.10',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '8.10',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.9',
            value: '8.9',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.9',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '8.9',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.8',
            value: '8.8',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.8',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.5',
            value: '8.5',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '8.5',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.4',
            value: '8.4',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '8.4',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.2',
            value: '8.2',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.2',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.1',
            value: '8.1',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.1',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '8.1.4',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
          {
            displayText: 'Node 8.0',
            value: '8.0',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|8.0',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node8EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 7',
        value: '7',
        minorVersions: [
          {
            displayText: 'Node 7.10',
            value: '7.10',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '7.10.1',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: false,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node7EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 6',
        value: '6',
        minorVersions: [
          {
            displayText: 'Node 6 LTS',
            value: '6-LTS',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6-lts',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.12',
            value: '6.12',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '6.12',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.11',
            value: '6.11',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6.11',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.10',
            value: '6.10',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6.10',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.9',
            value: '6.9',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6.9',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '6.9.5',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.6',
            value: '6.6',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6.6',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.5',
            value: '6.5',
            stackSettings: {
              windowsRuntimeSettings: {
                runtimeVersion: '6.5.0',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
          {
            displayText: 'Node 6.2',
            value: '6.2',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|6.2',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node6EOL,
              },
            },
          },
        ],
      },
      {
        displayText: 'Node 4',
        value: '4',
        minorVersions: [
          {
            displayText: 'Node 4.8',
            value: '4.8',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|4.8',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node4EOL,
              },
              windowsRuntimeSettings: {
                runtimeVersion: '4.8',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: false,
                },
                endOfLifeDate: node4EOL,
              },
            },
          },
          {
            displayText: 'Node 4.5',
            value: '4.5',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|4.5',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node4EOL,
              },
            },
          },
          {
            displayText: 'Node 4.4',
            value: '4.4',
            stackSettings: {
              linuxRuntimeSettings: {
                runtimeVersion: 'NODE|4.4',
                isDeprecated: true,
                remoteDebuggingSupported: false,
                appInsightsSettings: {
                  isSupported: true,
                },
                gitHubActionSettings: {
                  isSupported: true,
                },
                endOfLifeDate: node4EOL,
              },
            },
          },
        ],
      },
    ],
  };
};

export const nodeStackNonIsoDates: WebAppStack = getNodeStack(false);

export const nodeStack: WebAppStack = getNodeStack(true);
