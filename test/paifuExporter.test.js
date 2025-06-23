import assert from 'assert';
import { GameLog } from '../src/mahjong/gameLog.js';
import { exportGameDetail } from '../src/mahjong/paifuExporter.js';

const log = new GameLog({ uuid: 'test-uuid', start_time: 1, end_time: 2, accounts: [0,1,2,3] });
log.startRound({ round: 1 });
log.recordDraw(0, '1m');
log.recordDiscard(0, '1m');
log.recordCall(1, 'pon', ['1m','1m','1m']);
log.recordWin(0, { hand: 'tanyao' });
log.endRound();

const exported = exportGameDetail(log);
assert.strictEqual(exported.head.uuid, 'test-uuid');
assert.strictEqual(exported.data.name, '.lq.GameDetailRecords');
assert.strictEqual(exported.data.actions.length, 4);
assert.strictEqual(exported.data.actions[0].game_event.type, 'draw');
console.log('paifuExporter tests passed');
