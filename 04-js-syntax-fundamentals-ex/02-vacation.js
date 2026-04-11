function vacation(groupSize, groupType, day) {
    total = 0
    if (groupType === "Students") {
        if (day === "Friday") {
            total = groupSize * 8.45
        } else if (day === "Saturday") {
            total = groupSize * 9.8
        } else if (day === "Sunday") {
            total = groupSize * 10.46
        }
        if (groupSize >= 30) {
            total *= 0.85
        }
    } else if (groupType === "Business") {
        if (groupSize >= 100) {
            groupSize -= 10
        }
        if (day === "Friday") {
            total = groupSize * 10.9
        } else if (day === "Saturday") {
            total = groupSize * 15.6
        } else if (day === "Sunday") {
            total = groupSize * 16
        }
    } else if (groupType === "Regular") {
        if (day === "Friday") {
            total = groupSize * 15
        } else if (day === "Saturday") {
            total = groupSize * 20
        } else if (day === "Sunday") {
            total = groupSize * 22.5
        }
        if (groupSize >= 10 && groupSize <= 20) {
            total *= 0.95
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}