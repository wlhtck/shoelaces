module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
