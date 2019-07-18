const schedule = require(`node-schedule`)

// */5 de 5 em 5 segundos. 
const tarefa1 = schedule.scheduleJob(`*/2 * 16 * * 4`, function (){
    console.log(`Executando tarefa 1!`, new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log(`Cancelando tarefa 1!`)
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Executando tarefa 2!`, new Date().getSeconds())
})