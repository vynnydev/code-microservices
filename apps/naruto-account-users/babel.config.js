module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@domain/*': './src/domain/*',
          '@infra/*': './src/infra/*',
          '@main/*': './src/main/*',
          '@presentation/*': './src/presentation/*',
          '@useCases/*': './src/useCases/*',
          '@utils/*': './src/utils/*',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
}