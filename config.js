SystemJS.config({
     baseURL: 'https://unpkg.com/',
     defaultExtension: true,
     meta: {
       '*.js': {
         'babelOptions': {
           react: true
         }
       },
       '*.css': { loader: 'css' }
     },
     map: {
       'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
       'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
       'react': 'react@^16.6.3/umd/react.production.min.js',
       'react-router': 'react-router@5.1.2/umd/react-router.min.js',
       'react-router-dom': 'react-router-dom@5.1.2/umd/react-router-dom.min.js',
       'prop-types': 'prop-types@15.7.2/prop-types.min.js',
       'react-is': 'react-is@16.13.1/cjs/react-is.production.min.js',
       'react-dom': 'react-dom@^16.6.3/umd/react-dom.production.min.js',
       'react-redux': 'react-redux@7.2.0/dist/react-redux.min.js',
       'react-scripts': 'react-scripts@3.4.1/bin/react-scripts.js',
       'redux': 'redux@4.0.5/dist/redux.js',
       'css': 'systemjs-plugin-css@0.1.37/css.js'
   
     },
     transpiler: 'plugin-babel'
   });
   
   SystemJS.import('../src/index.js')
     .catch(console.error.bind(console));