import { RentInProgress } from "@/_types/cykleo/rent";
import { DateTime } from "luxon";

const freeTimeInMinutes = 30

export interface PaidTime {
    days: number
    hours: number
    minutes: number
}

export function useRentTimeCalculator(rent: RentInProgress) {
    const beginDateParsed = DateTime.fromISO(rent.beginDate)
    const nowDateParsed = DateTime.now()

    const durationInMinutes = Math.floor(nowDateParsed.diff(beginDateParsed, 'minutes').minutes)

    const freeTimeLeftInMinutes = freeTimeInMinutes - durationInMinutes
    
    const isFreeTimeSpent = freeTimeLeftInMinutes <= 0
    
    const paidTimeInMinutes = isFreeTimeSpent ? -freeTimeLeftInMinutes : 0

    return {
        freeTimeLeftInMinutes,
        isFreeTimeSpent,
        paidTimeInMinutes
    }

}