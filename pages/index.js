import React, { Component } from 'react';
import Head from 'next/head'

import Centered from '../components/Centered';
import { ButtonCross, ButtonPlay } from '../components/Buttons';
import RunTimer from '../components/RunTimer';
import InitTimer from '../components/InitTimer';
import Init from '../domains/Init';
import Run from '../domains/Run';
import { Timer as TimerIcon } from '../components/Icons';

const initState = new Init();

export default class Timer extends Component {
    state = {
        openModal: false,
        run: null,
    }

    render() {
        return (
            <div className="myApp" style={{ display: 'flex', flexDirection: 'column', padding: '2em 1em', boxSizing: 'border-box' }}>
                <Head>
                    <title>My Timer</title>
                </Head>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1em' }}>
                    <TimerIcon size={44} />
                    <label style={{ fontSize: '3em' }}>Timer</label>
                    {this.state.openModal
                        ? <ButtonCross onClick={() => this.setState({ openModal: false, run: null })} />
                        : <ButtonPlay onClick={() => this.setState({ openModal: true, run: new Run(initState) })} />
                    }

                </div>

                <div style={{ flex: 1 }}>
                    {this.state.openModal
                        ? <RunTimer domain={this.state.run} />
                        : <InitTimer domain={initState} />
                    }
                </div>
                <style jsx>{`
                    .myApp {
                        background-color: white;
                        height: 100%;
                        padding: 0 1rem;
                    }

                    @media only screen and (min-width: 1281px) {
                        .myApp {
                            width: 480px;
                            height: 480px;
                            padding: 0.5em 2em 2em 2em;
                            border-radius: 1rem;
                        }
                    }
                    
                `}</style>
            </div>
        );
    }
}
