// Time slot calculator

function timeSloteAvailable(appointments) {
    const startOfDay = 0
    const endOfDay = 24

    appointments.sort((a, b) => a[0] - b[0])

    const availableSlots = []

    if (appointments[0][0] > startOfDay) {
        availableSlots.push([startOfDay, appointments[0][0]])
    }
    for (let i = 0; i < appointments.length - 1; i++) {
        const endCurrent = appointments[i][1]
        const startNext = appointments[i + 1][0]
        if (endCurrent < startNext) {
            availableSlots.push([endCurrent, startNext])
        }
    }

    if (appointments[appointments.length - 1][1] < endOfDay) {
        availableSlots.push(appointments[appointments.length - 1][1], endOfDay)
    }

    return availableSlots
}

const appointments = [[10, 12], [14, 16], [17, 20]]
const availableSlots = timeSloteAvailable(appointments)

console.log(availableSlots);
