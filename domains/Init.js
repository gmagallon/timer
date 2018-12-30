import { observable } from 'mobx';

export default class Init {
    @observable state = {
        sets: 1,
        workMinutes: 0,
        workSeconds: 0,
        restMinutes: 0,
        restSeconds: 0,
    }

    addSet = () => this.state.sets += 1
    removeSet = () => {
        const value = this.state.sets - 1;
        this.state.sets = value > 1 ? value : 1;
    }

    onValueChanged = field => (value) => {
        this.state[field] = value;
    }

    cleanValues = () => {
        this.state.workMinutes = parseInt(this.state.workMinutes || 0, 10);
        this.state.workSeconds = parseInt(this.state.workSeconds || 0, 10);
        this.state.restMinutes = parseInt(this.state.restMinutes || 0, 10);
        this.state.restSeconds = parseInt(this.state.restSeconds || 0, 10);
    }

    addTime = type => () => {
        const minutes = this.state[`${type}Minutes`];
        const seconds = this.state[`${type}Seconds`];

        const nextSeconds = (seconds + 1) % 60;
        const nextMinutes = nextSeconds === 0 ? minutes + 1 : minutes;

        this.state[`${type}Minutes`] = nextMinutes;
        this.state[`${type}Seconds`] = nextSeconds;
    }

    removeTime = type => () => {
        const minutes = this.state[`${type}Minutes`];
        const seconds = this.state[`${type}Seconds`];

        const nextSeconds = (seconds - 1) < 0
            ? minutes === 0
                ? 0
                : 59
            : (seconds - 1);
        const nextMinutes = nextSeconds === 59
            ? (minutes - 1) < 0
                ? 0
                : (minutes - 1)
            : minutes;

        this.state[`${type}Minutes`] = nextMinutes;
        this.state[`${type}Seconds`] = nextSeconds;
    }
}