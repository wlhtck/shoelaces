module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/shoelaces' : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
