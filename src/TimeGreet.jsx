import './TimeGreet.css';

export function TimeGreet(){
    let date = new Date();
    return(
        <div className="Time__container">
        <div className="Time">{date.getHours()}: 
            {date.getMinutes()}
        </div>
        <div className="Greeting">Goeiemorgen</div>
        </div>
    )

}
