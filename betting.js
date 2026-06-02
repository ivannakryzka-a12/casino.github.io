// Тимчасовий коментар Софії для ЛР 4
/**
 * Клас BettingService реалізує логіку керування ставками.
 */
class BettingService {
    constructor() {
        this.MIN_BET = 10;
        this.MAX_BET = 10000;
        this.VALID_STATUSES = ['won', 'lost'];
    }

    /**
     * Створює нову ставку з валідацією вхідних даних.
     * Використовує розгалуження для перевірки меж (BVA).
     */
    placeBet(amount, odds) {
        if (typeof amount !== 'number' || typeof odds !== 'number') {
            throw new Error("Invalid input type");
        }
        if (amount < this.MIN_BET || amount > this.MAX_BET) {
            throw new Error("Amount out of range");
        }
        if (odds <= 1.0) {
            throw new Error("Odds must be greater than 1.0");
        }
        return { amount, odds, status: 'pending' };
    }

    /**
     * Змінює статус ставки на основі результату.
     * Реалізує логіку еквівалентного розбиття (EP) для статусів.
     */
    resolveBet(bet, result) {
        if (!bet || typeof bet !== 'object' || bet.status !== 'pending') {
            throw new Error("Bet cannot be resolved");
        }
        if (!this.VALID_STATUSES.includes(result)) {
            throw new Error("Unknown result type");
        }
        bet.status = result;
        return bet;
    }

    /**
     * Обчислює загальну суму виграшу для масиву ставок.
     * Містить цикл та умовний перехід (нетривіальна логіка).
     */
    calculateTotalPayout(bets) {
        if (!Array.isArray(bets)) {
            throw new Error("Input must be an array");
        }
        let total = 0;
        for (let bet of bets) {
            if (bet.status === 'won') {
                total += (bet.amount * bet.odds);
            }
        }
        return Number(total.toFixed(2));
    }
}

module.exports = BettingService;