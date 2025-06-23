export class RoundLog {
  constructor(info = {}) {
    this.info = info; // e.g. {round:1, honba:0}
    this.draws = [];
    this.discards = [];
    this.calls = [];
    this.wins = [];
  }
}

export class GameLog {
  constructor(head = {}) {
    this.head = {
      uuid: head.uuid || '',
      start_time: head.start_time || 0,
      end_time: head.end_time || 0,
      accounts: head.accounts || []
    };
    this.rounds = [];
    this.actions = [];
    this.currentRound = null;
  }

  startRound(info) {
    const r = new RoundLog(info);
    this.rounds.push(r);
    this.currentRound = r;
  }

  endRound() {
    this.currentRound = null;
  }

  recordDraw(player, tile) {
    if (!this.currentRound) return;
    const event = { type: 'draw', player, tile };
    this.currentRound.draws.push(event);
    this.actions.push(event);
  }

  recordDiscard(player, tile) {
    if (!this.currentRound) return;
    const event = { type: 'discard', player, tile };
    this.currentRound.discards.push(event);
    this.actions.push(event);
  }

  recordCall(player, callType, tiles) {
    if (!this.currentRound) return;
    const event = { type: 'call', player, callType, tiles };
    this.currentRound.calls.push(event);
    this.actions.push(event);
  }

  recordWin(player, hand) {
    if (!this.currentRound) return;
    const event = { type: 'win', player, hand };
    this.currentRound.wins.push(event);
    this.actions.push(event);
  }
}
