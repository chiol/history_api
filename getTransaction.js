import pkg from 'eosjs';
import fetch from 'node-fetch';

const { JsonRpc } = pkg;
const rpc = new JsonRpc('[IP주소 또는 도메인 이름:포트번호]', { fetch });
//예시: const rpc = new JsonRpc('http://test.ledgis.io:8011', { fetch });

//트랜잭션 정보 보기 (history_get_transaction)
(async () => {
    let transaction = await rpc.history_get_transaction('트랜잭션 ID',블록 id); //정보를 보고 싶은 트랜잭션의 아이디(문자열 형식)와 블록번호
    console.log(transaction);
})();