import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Full from './Full';
import Centered from './Centered';
import { ButtonPlay, ButtonStop, ButtonRetry } from './Buttons';

@observer
export default class RunTimer extends Component {
    constructor({ domain }) {
        super();
        this.soonRef = React.createRef();
        this.doneRef = React.createRef();

        this.notifySoon = () => {
            const current = this.soonRef.current;
            current.play();
            let cpt = 0;
            const listener = () => {
                if (cpt++ < 2) {
                    current.play();
                } else {
                    current.removeEventListener('ended', listener);
                }
            };
            current.addEventListener('ended', listener);
        };
        this.notifyDone = () => this.doneRef.current.play();

        if (domain) {
            domain.registerSoon(this.notifySoon);
            domain.registerDone(this.notifyDone);
        }
    }

    componentWillUnmount() {
        const { domain } = this.props;
        if (domain) {
            domain.unRegisterSoon(this.notifySoon);
            domain.unRegisterDone(this.notifyDone);
        }
    }

    format = (type, current) => this.props.domain.state[current][type] < 10
        ? `0${this.props.domain.state[current][type]}`
        : `${this.props.domain.state[current][type]}`

    render() {
        const { domain } = this.props;
        const isDone = !domain || domain.isDone();
        return (
            <Full style={{ display: 'flex', flexDirection: 'column', padding: '1em', boxSizing: 'border-box' }}>
                {isDone
                    ? <Centered style={{ flex: 1, fontWeigth: 'bold', fontSize: '2em' }}>Terminé</Centered>
                    : (
                        <Centered style={{ flex: 1, textAlign: 'center' }}>
                            <div>
                                <h2>{domain.state.type === "work" ? "Action" : "Repos"}</h2>
                                <div style={{ fontSize: '6em' }}>
                                    <span>
                                        {this.format('minutes', domain.state.type)}
                                    </span>
                                    :
                                <span>
                                        {this.format('seconds', domain.state.type)}
                                    </span>
                                </div>
                                <br />
                                <p>Restant: {domain.state.sets}</p>
                            </div>
                        </Centered>
                    )
                }
                <Centered>
                    {!isDone && (
                        <React.Fragment>
                            <ButtonPlay onClick={() => domain.start()} />
                            <ButtonStop onClick={() => domain.stop()} />
                        </React.Fragment>
                    )}
                    <ButtonRetry onClick={() => domain.reset()} />
                </Centered>
                <audio ref={this.doneRef} src="/static/sounds/done.mp3" />
                <audio ref={this.soonRef} src="/static/sounds/soon.mp3" />
            </Full>
        );
    }
}