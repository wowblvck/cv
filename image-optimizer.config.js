const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|webp|svg)$/i,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    quality: 80,
  },
  jpeg: {
    quality: 80,
  },
  jpg: {
    quality: 80,
  },
  webp: {
    lossless: true,
  },
};

export default DEFAULT_OPTIONS;
