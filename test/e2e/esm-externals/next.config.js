module.exports = {
  experimental: {
    esmExternals: true,
    turbo: {
      resolveAlias: {
        'preact/compat': 'react',
      },
    },
    serverComponentsExternalPackages: [
      'app-esm-package1',
      'app-esm-package2',
      'app-invalid-esm-package',
    ],
  },
  webpack(config, { isServer }) {
    config.experiments.toplevelAwait = true
    config.resolve.alias = {
      ...config.resolve.alias,
      'preact/compat': 'react',
    }
    return config
  },
}
