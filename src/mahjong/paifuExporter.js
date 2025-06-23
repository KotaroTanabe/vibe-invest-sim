export function exportGameDetail(log) {
  const actions = log.actions.map(ev => {
    const base = { passed: 0, type: ev.type, result: {}, user_input: {}, user_event: {}, game_event: {} };
    switch (ev.type) {
      case 'draw':
        base.game_event = { type: 'draw', player: ev.player, tile: ev.tile };
        break;
      case 'discard':
        base.game_event = { type: 'discard', player: ev.player, tile: ev.tile };
        break;
      case 'call':
        base.game_event = { type: 'call', player: ev.player, call: ev.callType, tiles: ev.tiles };
        break;
      case 'win':
        base.game_event = { type: 'win', player: ev.player, hand: ev.hand };
        break;
      default:
        break;
    }
    return base;
  });

  return {
    head: log.head,
    data: {
      name: '.lq.GameDetailRecords',
      version: '0.0.1',
      actions
    }
  };
}
