module.exports = {
  nodeServer:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '',
  database:
    process.env.NODE_ENV === 'development'
      ? 'mongodb://localhost:27017/my-blog'
      : 'mongodb://valkyris:valky1223@ds255930.mlab.com:55930/my-blog'
};
