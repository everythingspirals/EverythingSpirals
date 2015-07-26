// Set the current environment to true in the env object

exports.env = {
  production: false,
  staging: false,
  test: false,
  development: false
};

exports.server = {
  port: 3000,
  // In staging and production, listen loopback. nginx listens on the network.
  ip: '127.0.0.1'
};

exports.views = {
  path: './app/views',
  engine: 'jade'
}

exports.db = {
  url:"mongodb://127.0.0.1/mydb"
}
