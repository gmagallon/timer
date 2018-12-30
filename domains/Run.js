import { observable } from 'mobx';

export default class Run {
    @observable state = {}

    constructor(init) {
        this.props = init.state;
        this.reset();

        this.soonListeners = [];
        this.doneListeners = [];
    }

    isCurrentOver = () => this.state[this.state.type].seconds === 0 && this.state[this.state.type].minutes === 0
    isSetOver = () => this.state.work.seconds === 0 && this.state.work.minutes === 0 && this.state.rest.seconds === 0 && this.state.rest.minutes === 0;
    isDone = () => this.isSetOver() && this.state.sets === 0

    notifyDone = () => {
        this.doneListeners.forEach(fn => fn())
    }
    notifySoon = () => {
        this.soonListeners.forEach(fn => fn())
    }

    registerSoon = (callback) => this.soonListeners.push(callback)
    registerDone = (callback) => this.doneListeners.push(callback)
    unRegisterSoon = (callback) => this.soonListeners.splice(this.soonListeners.indexOf(callback), 1)
    unRegisterDone = (callback) => this.doneListeners.splice(this.doneListeners.indexOf(callback), 1)

    start = () => {
        this.state.sets -= 1;

        this.intervalId = setInterval(() => {
            if (this.isCurrentOver()) {
                this.notifyDone();
            }

            if (this.isSetOver()) {
                if (this.state.sets === 0) {
                    clearInterval(this.intervalId);
                    this.state.done = true;
                } else {
                    this.state = {
                        sets: this.state.sets - 1,
                        work: {
                            minutes: this.props.workMinutes,
                            seconds: this.props.workSeconds
                        },
                        rest: {
                            minutes: this.props.restMinutes,
                            seconds: this.props.restSeconds
                        },
                        type: "work",
                    };
                }

                return;
            }

            const current = this.state[this.state.type];
            if (current.minutes === 0 && current.seconds === 0) {
                this.state.type = this.state.type === "work" ? "rest" : "work";
                return;
            }

            if (current.seconds === 0) {
                this.state[this.state.type] = {
                    minutes: current.minutes - 1,
                    seconds: 59,
                };
                return;
            }

            if (current.minutes === 0 && current.seconds === 6 && this.state.type === "work") {
                this.notifySoon();
            }

            this.state[this.state.type] = {
                minutes: current.minutes,
                seconds: current.seconds - 1,
            };

        }, 1000);
    }
    stop = () => {
        clearInterval(this.intervalId);
    }
    reset = () => {
        this.state = {
            sets: this.props.sets || 0,
            work: {
                minutes: this.props.workMinutes || 0,
                seconds: this.props.workSeconds || 0,
            },
            rest: {
                minutes: this.props.restMinutes || 0,
                seconds: this.props.restSeconds || 0,
            },
            type: "work",
        };
    }
}