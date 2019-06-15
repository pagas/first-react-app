import React, {Component} from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0
        };
        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900
        }
    }

    setDefaultTime = () => {
        // Default time is 25 min
        this.setState({
            time: this.times.defaultTime
        });
    };

    componentDidMount() {
        // Set default time when the component mounts
        this.setDefaultTime();
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working!'
            }
        });

        return this.setTime(this.times.defaultTime);
    };

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        });

        return this.setTime(this.times.shortBreak);
    };

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        });

        return this.setTime(this.times.longBreak);
    };

    setTime = newTime => {
        this.restartInterval();

        this.setState({
            time: newTime
        });
    };
    restartInterval = () => {
        // Clearing the interval
        clearInterval(this.interval);

        // Execute countDown function every second
        this.interval = setInterval(this.countDown, 1000);
    };

    countDown = () => {
        // If the time reach 0 then we display Buzzzz! alert.
        if (this.state.time === 0) {
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'Buzzzzzzzz!'
                }
            });
        } else {
            // We decrease the time second by second
            this.setState({
                time: this.state.time - 1
            });
        }
    };

    displayTimer(seconds) {
        // Formatting the time into mm:ss
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render() {
        const {alert: {message, type}, time} = this.state;

        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className="timer">
                    {this.displayTimer(time)}
                </div>

                <div className="types">
                    <button
                        className="start"
                        onClick={this.setTimeForWork}
                    >
                        Start Working
                    </button>
                    <button
                        className="short"
                        onClick={this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button
                        className="long"
                        onClick={this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        );
    }
}
