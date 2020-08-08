module.exports = {
  sentry: null, // Your Sentry DSN URL
  shard: {
    respawn: true,
    shardArgs: [], // Args to next script file (node index.js [args])
    execArgv: [] // Args to next node excutable file (node [args] index.js)
  },
  bot: {
    token: 'SUPEEEEEEEEER SECRET Token',
    // Prefix: /src/constructors/placeHolderConstructors.js[PREFIX]
    games: ['%USERS% 명의 유저와 함께하고 있어요!', '%GUILDS% 개의 서버에서 사용 중!', '>>도움 | %PING%ms', '%SHARDCOUNT% 샤드 | %GUILDS% 서버', 'Open source: github.com/sannoob/Siru-stable'],
    gamesInterval: 30000, // 1000ms = 1sec (ms)
    owners: ['12345678']
  },
  webhook: {
    info: {
      id: '123456789012345678',
      token: 'TOKENTOKENTOKENTOKENTOKENTOKEN'
    }
  },
  audio: {
    nodes: [
      { host: '192.168.0.11', port: 2333, auth: 'youshallnotpass', name: 'Container-1' },
      { host: '192.168.0.22', port: 2333, auth: 'youshallnotpass', name: 'Container-2' }
    ],
    relatedRoutePlanner: { // Avoid 429 From Youtube If ipBlocks not provided, disable routeplanner
      ipBlocks: [], // Your ip range (CIDR)
      excludeIps: [], // routePlanner will Exclude ip
      retryCount: 2 // retryCount
    }
  },
  logger: {
    level: 'debug'
  },
  db: {
    mysql: {
      host: 'my.s.ql',
      user: 'root',
      password: 'password',
      database: 'siru'
    },
    mongo: {
      mongoURL: 'mongodb://mongodbIP:27017/DBNAME?authSource=admin',
      user: 'yourmongodbuser',
      password: 'yourmongodbpassword'
    }
  },
  embed: {
    general: '#7289DA',
    fatal: '#FF4D4D',
    warn: '#FCFFBA',
    good: '#DAFFDA',
    ban: '#FF7575'
  },
  others: {
    changelog_url: 'https://*****/.github.io/' // https://*****/.github.io/[COMMIT ID.txt]
  }
}
