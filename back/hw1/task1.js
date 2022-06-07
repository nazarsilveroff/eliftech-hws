// Задачки по таймерам, скидати мені в приватні:
//     Задача 1:
// Виводьте "Hello World" безкінечно починаючи з затримки 1 секунда, але з кожним разом додаємо затримку в 1 секунду.
// Так другий раз затримка буде 2 секунди, третій раз 3 секунди і т.д.
//     Додайте значення затримки в виведеному повідомлені.
//     Hello World. 1
// Hello World. 2
// Hello World. 3
// ....
//
// Обмеження: можна використовувати тільки const (без let і var)


const startIncrementalInterval = (callback, interval = 1000, intervalIncrement = 1000, iteration = 1) => {
    setTimeout(() => {
        callback({ iteration, interval, intervalIncrement })
        startIncrementalInterval(callback, interval + intervalIncrement, intervalIncrement, iteration + 1)
    }, interval)
}

startIncrementalInterval(({ iteration }) => console.log('Hello World.', iteration))



