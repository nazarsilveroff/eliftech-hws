// Задача 2:
// Так само, як і в першій задачі, але цього разу з повторами затримок.
//     Виведіть Hello World 5 разів із затримкою 100 ms.
//     Потім виведіть цю стрінгу знову 5 разів із затримкою 200ms.
//     Потім знову 5 разів із затримкою 300ms.
//     І так далі, поки програма не буде зупинена. Так само в вивід додайте значення затримки

const startIncrementalInterval = (callback, interval = 100, intervalIncrement = 100, iteration = 1) => {
    if (iteration >= 6) {
        intervalIncrement *= 2
        interval = intervalIncrement
        iteration = 1
    }
    setTimeout(() => {
        callback({iteration, interval, intervalIncrement})
        startIncrementalInterval(callback, interval, intervalIncrement, iteration +=1)
    }, interval)
}

startIncrementalInterval(({iteration, interval}) => console.log('Hello World.', iteration, interval))

