function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = Cache(cacheSize);
  let answer = 0;

  for (let i = 0; i < cities.length; i++) {
    const target = cities[i].toLowerCase();
    if (cache.has(target)) {
      answer += 1;
      cache.touch(target);
    } else {
      answer += 5;
      cache.add(target);
    }
  }
  return answer;
}

function Cache(cacheSize) {
  const queue = [];

  const has = (value) => queue.includes(value);

  const touch = (value) => {
    const idx = queue.indexOf(value);
    if (idx !== -1) {
      queue.splice(idx, 1);
      queue.push(value);
    }
  };

  const add = (value) => {
    const idx = queue.indexOf(value);

    if (idx !== -1) {
      queue.splice(idx, 1);
      queue.push(value);
      return;
    }

    if (queue.length >= cacheSize) {
      queue.shift();
    }

    queue.push(value);
  };

  return { has, add, touch };
}
