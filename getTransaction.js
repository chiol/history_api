
import pkg from 'eosjs';
import fetch from 'node-fetch';

const { JsonRpc } = pkg;
const rpc = new JsonRpc('http://61.74.164.252:8011', { fetch });

(async () => {
    const transaction = await rpc.get_block(684627);
    console.log(transaction);
  })();