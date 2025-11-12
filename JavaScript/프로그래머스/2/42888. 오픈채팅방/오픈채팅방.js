const SystemCode = Object.freeze({
  Enter: 'Enter',
  Leave: 'Leave',
  Change: 'Change',
})

const SystemTemplates = Object.freeze({
  [SystemCode.Enter]: (nick) => `${nick}님이 들어왔습니다.`,
  [SystemCode.Leave]: (nick) => `${nick}님이 나갔습니다.`,
})

const parseLine = (line) => line.split(' ')

const buildNickMap = (rows) =>
  rows.reduce((acc, [type, uid, nick]) => {
    if (type !== SystemCode.Leave && nick) acc.set(uid, nick)
    return acc
  }, new Map())

const selectEmittableEvents = (rows) =>
  rows
    .filter(([type]) => type === SystemCode.Enter || type === SystemCode.Leave)
    .map(([type, uid]) => [type, uid])

const renderEvents = (events, nickById, templates) =>
  events.map(([type, uid]) => templates[type](nickById.get(uid)))

function solution(record, { templates = SystemTemplates } = {}) {
  const rows = record.map(parseLine)
  const nickById = buildNickMap(rows)
  const events = selectEmittableEvents(rows)
  return renderEvents(events, nickById, templates)
}
