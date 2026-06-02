// Тимчасовий коментар Софії для ЛР 4
// Тимчасовий коментар Іванни для активації ЛР4

const MIN_ODDS = 1.0;

const BetStatus = Object.freeze({
    PENDING: 'pending',
    WON: 'won',
    LOST: 'lost'
});

/**
 * Клас BettingService реалізує логіку керування ставками.
/** * Клас BettingService реалізує логіку керування ставками.
 */
class BettingService {
    static MIN_BET = 10;
    static MAX_BET = 10000;
    static VALID_STATUSES = [BetStatus.WON, BetStatus.LOST];

    constructor() {
        // Зберігаємо оригінальні властивості для повної сумісності з тестами ЛР3
        this.MIN_BET = 10;
        this.MAX_BET = 10000;
        this.VALID_STATUSES = ['won', 'lost'];
    }

    /** 
     * Створює нову ставку з валідацією вхідних даних.
     * Використовує розгалуження для перевірки меж (BVA).
     */
    placeBet(amount, odds) {
        if (typeof amount !== 'number'||  typeof odds !== 'number') {
            throw new Error("Invalid input type");
        }
        if (amount < this.MIN_BET || amount > this.MAX_BET) {
            throw new Error("Amount out of range");
        }
        if (odds <= MIN_ODDS) {
            throw new Error("Odds must be greater than 1.0");
        }
        return { amount, odds, status: BetStatus.PENDING };
    }

    /** 
     * Змінює статус ставки на основі результату.
     * Реалізує логіку еквівалентного розбиття (EP) для статусів.
     */
    resolveBet(bet, result) {
        // Виправлення за коментарем Аліни: Extract Variable
        const isBetInvalid = !bet || typeof bet !== 'object' || bet.status !== BetStatus.PENDING;
        
        if (isBetInvalid) {
            throw new Error("Bet cannot be resolved");
        }
        if (!this.VALID_STATUSES.includes(result)) {
            throw new Error("Unknown result type");
        }

        // Виправлення за коментарем Аліни: Повернення копії (уникнення мутації)
        return { ...bet, status: result };
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
            if (bet.status === BetStatus.WON) {
                total += (bet.amount * bet.odds);
            }
        }
        return Number(total.toFixed(2));
    }
}

module.exports = BettingService;