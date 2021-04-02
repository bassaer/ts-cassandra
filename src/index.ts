import { Client, ClientOptions } from 'cassandra-driver';

const options: ClientOptions = {
  contactPoints: ['192.168.33.10'],
  keyspace: 'mykeyspace'
}

const client = new Client(options);

client.connect()
  .then(function () {
    return client.execute('SELECT * FROM users');
  })
  .then((result) => {
    for (const row of result.rows) {
      console.log(row);
    }
  })
  .finally(() => client.shutdown());
