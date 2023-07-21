export function useRentCostCalculator(paidTimeInMinutes: number, userHasSubscription: boolean) {
    const pricePerHour = userHasSubscription ? 1 : 2;

    const paidTimeInHour = Math.ceil(paidTimeInMinutes/60);
    const rentCost = paidTimeInHour * pricePerHour;

    return {
        rentCost
    }

}