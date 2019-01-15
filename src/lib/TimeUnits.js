export default class TimeUnits{

    static secondsToClock(seconds){
        var hours = Math.floor(seconds / 3600)
        var minutes = Math.floor((seconds - (hours * 3600)) / 60)
        var secs = Math.floor(seconds - (hours * 3600) - (minutes * 60))

        return `${10 > hours ? '0' + hours : hours} : 
        ${10 > minutes ? '0' + minutes : minutes} : 
        ${10 > secs ? '0' + secs : secs}`
    }
    
}