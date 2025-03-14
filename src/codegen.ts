import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env['VITE_GRAPHQL_API'] ?? 'http://localhost:8080/v1/graphql']: {
        headers: {
          'x-hasura-admin-secret': process.env['GRAPHQL_SECRET_HASURA'] ?? '',
        },
      },
    },
  ],
  require: ['ts-node/register'],
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'fragment-matcher',
      ],
      config: {
        flattenGeneratedTypes: true,
        immutableTypes: true,
        constEnums: true,
        withRefetchFn: true,
        withHooks: true,
      },
    },
  },
};
export default config;
