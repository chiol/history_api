
import pkg from 'eosjs';
import fetch from 'node-fetch';

const { JsonRpc } = pkg;
const rpc = new JsonRpc('http://61.74.164.252:8011', { fetch });

(async () => {
    const transaction = await rpc.history_get_transaction('27ec2540069bf6771cb3140c985c27d7adb4584d6964c7beed9294834068ddd7', 684627);
    console.log(transaction);
  })();