const BettingService = require('./betting');

describe('BettingService Unit Tests', () => {
    let service;

    beforeEach(() => {
        service = new BettingService();
    });

    //ТЕСТИ МЕТОДУ placeBet 

    test('Should pass for lower boundary value', () => {
        // Arrange (Підготовка)
        const amount = 10;
        // Act (Дія)
        const bet = service.placeBet(amount, 2.0);
        // Assert (Перевірка)
        // Техніка: BVA (граничне значення), позитивний тест
        expect(bet.amount).toBe(10);
    });

    test('Should throw error for value below lower boundary', () => {
        // Arrange
        const amount = 9;
        // Act & Assert
        // Техніка: BVA (межа - 1), негативний тест
        expect(() => service.placeBet(amount, 2.0)).toThrow("Amount out of range");
    });

    test('Should pass for upper boundary value', () => {
        const bet = service.placeBet(10000, 1.5);
        // Техніка: BVA (верхня межа), позитивний тест
        expect(bet.amount).toBe(10000);
    });

    test('Should throw error for odds equal to 1.0', () => {
        // Техніка: BVA (межа коефіцієнта), негативний тест
        expect(() => service.placeBet(100, 1.0)).toThrow();
    });

    // ТЕСТИ МЕТОДУ resolveBet

    test('Should set status to "won" for valid input', () => {
        // Arrange
        const bet = { amount: 100, odds: 2.0, status: 'pending' };
        // Act
        const result = service.resolveBet(bet, 'won');
        // Assert
        // Техніка: EP (клас валідних значень), позитивний тест
        expect(result.status).toBe('won');
    });

    test('Should throw error for invalid status type', () => {
        const bet = { amount: 100, odds: 2.0, status: 'pending' };
        // Техніка: EP (невалідний клас), негативний тест
        expect(() => service.resolveBet(bet, 'draw')).toThrow("Unknown result type");
    });

    test('Should throw error when resolving already finished bet', () => {
        const bet = { amount: 100, odds: 2.0, status: 'won' };
        // Техніка: Негативний тест (некоректний стан об'єкта)
        expect(() => service.resolveBet(bet, 'lost')).toThrow();
    });

    // ТЕСТИ МЕТОДУ calculateTotalPayout 

    test('Should correctly calculate sum of all won bets', () => {
        // Arrange
        const bets = [
            { amount: 100, odds: 2.0, status: 'won' },
            { amount: 50, odds: 3.0, status: 'won' }
        ];
        // Act
        const total = service.calculateTotalPayout(bets);
        // Assert
        // Техніка: Позитивний тест (логіка циклу)
        expect(total).toBe(350);
    });

    test('Should ignore lost bets in calculation', () => {
        const bets = [{ amount: 100, odds: 2.0, status: 'lost' }];
        // Техніка: EP (клас "lost" ставок), позитивний тест
        expect(service.calculateTotalPayout(bets)).toBe(0);
    });

    test('Should throw error if input is not an array', () => {
        // Техніка: Негативний тест (невірний тип даних)
        expect(() => service.calculateTotalPayout("string")).toThrow();
    });
});