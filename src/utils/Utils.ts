export function msToTime(ms : number) : string {
    const seconds : string = (ms / 1000).toFixed(1);
    const minutes : string = (ms / (1000 * 60)).toFixed(1);
    const hours : string = (ms / (1000 * 60 * 60)).toFixed(1);
    const days : string = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    
    if (parseInt(seconds) < 60) {
        return parseInt(seconds) + "s";
    } else if (parseInt(minutes) < 60) {
        return parseInt(minutes) + "m";
    } else if (parseInt(hours) < 24) {
        return parseInt(hours) + "h";
    } else {
        return parseInt(days) + "d"
    }
}