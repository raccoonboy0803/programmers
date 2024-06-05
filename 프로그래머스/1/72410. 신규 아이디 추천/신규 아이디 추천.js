function solution(new_id) {
  const specialChar = '~!@#$%^&*()=+[{]}:?,<>/';
  new_id = new_id.toLowerCase();

  let result = '';
  for (let i = 0; i < new_id.length; i++) {
    if (!specialChar.includes(new_id[i])) {
      result += new_id[i];
    }
  }
  new_id = result;

  new_id = new_id.replace(/\.{2,}/g, '.');

  if (new_id.startsWith('.')) {
    new_id = new_id.substring(1);
  }
  if (new_id.endsWith('.')) {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  if (new_id === '') {
    new_id = 'a';
  }

  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
    if (new_id.endsWith('.')) {
      new_id = new_id.substring(0, new_id.length - 1);
    }
  }

  if (new_id.length <= 2) {
    const lastString = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id += lastString;
    }
  }

  return new_id;
}