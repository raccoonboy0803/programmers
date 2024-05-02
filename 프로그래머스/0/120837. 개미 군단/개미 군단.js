function solution(hp) {
  const jangGun = Math.floor(hp / 5);
  const byungJung = Math.floor((hp - jangGun * 5) / 3);
  const ill = hp - jangGun * 5 - byungJung * 3;

  return jangGun + byungJung + ill;
}