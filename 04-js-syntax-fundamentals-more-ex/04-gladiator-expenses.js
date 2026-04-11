function calculateExpenses(fightsLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmets = Math.floor(fightsLost / 2);
    let swords = Math.floor(fightsLost / 3);
    let shields = Math.floor(fightsLost / 6);
    let armors = Math.floor(fightsLost / 12);
    let expenses = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armors * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}