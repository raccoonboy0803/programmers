function solution(bandage, health, attacks) {
  const maxHP = health;
  const [bandageTime, recoveryForsec, recoveryAddition] = bandage;
  let HP = health;
  let prevAttack = 0;

  for (let i = 0; i < attacks.length; i++) {
    const [attackTime, damage] = attacks[i];
    let attackTerm = attackTime - prevAttack;

    prevAttack = attackTime;

    if (HP > 0) {
      let totalRecovery = recoveryForsec * (attackTerm - 1);

      if (attackTerm - 1 >= bandageTime) {
        totalRecovery +=
          recoveryAddition * Math.floor((attackTerm - 1) / bandageTime);
      }
      HP = Math.min(maxHP, HP + totalRecovery);

      HP -= damage;
    }

    if (HP <= 0) {
      return -1;
    }
  }
  return HP;
}