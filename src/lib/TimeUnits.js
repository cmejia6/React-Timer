export default class TimeUnits{
    /*constructor(seconds){
        this.state={
            seconds : 0
        }
    }*/

    static secondsToClock(seconds){
        var minutes = Math.floor(seconds / 60)
        var secs = Math.floor(seconds -  minutes * 60)
        var hours = Math.floor(seconds / 3600)

        return `${10 > hours ? '0' + hours : hours} : 
        ${10 > minutes ? '0' + minutes : minutes} : 
        ${10 > secs ? '0' + seconds : seconds}`
    }
}