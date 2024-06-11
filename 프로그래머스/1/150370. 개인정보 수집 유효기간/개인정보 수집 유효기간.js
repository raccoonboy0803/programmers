function solution(today, terms, privacies) {
  let result = [];
  const todayDate = new Date(today.replace(/\./g, '-'));

  const termMap = {};
  terms.forEach((term) => {
    const [type, duration] = term.split(' ');
    termMap[type] = Number(duration);
  });

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(' ');
    const duration = termMap[type];

    let [year, month, day] = date.split('.').map(Number);

    month += duration;

    if (month > 12) {
      year += Math.floor(month / 12);
      month = month % 12;
      if (month === 0) {
        month = 12;
        year -= 1;
      }
    }

    const expiryDate = new Date(
      `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
        2,
        '0'
      )}`
    );

    if (todayDate >= expiryDate) {
      result.push(index + 1);
    }
  });

  return result;
}