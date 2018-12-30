import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Full from './Full';
import Line from './Line';
import Centered from './Centered';
import InputTime from './InputTime';
import { ButtonPlus, ButtonMinus } from './Buttons';

@observer
export default class InitTimer extends Component {
    render() {
        const {
            domain,
        } = this.props;

        return (
            <Full centered>
                <div style={{ padding: '1em' }}>
                    <Line title="Nombre de tours">
                        <ButtonMinus onClick={domain.removeSet} />
                        <Centered style={{ fontSize: 'xx-large' }}>{domain.state.sets}</Centered>
                        <ButtonPlus onClick={domain.addSet} />
                    </Line>

                    <Line title="Temps d'action">
                        <ButtonMinus onClick={domain.removeTime('work')} />
                        <Centered>
                            <InputTime
                                onMinutesChanged={domain.onValueChanged('workMinutes')}
                                onSecondsChanged={domain.onValueChanged('workSeconds')}
                                minutes={domain.state.workMinutes}
                                seconds={domain.state.workSeconds}
                                clean={domain.cleanValues}
                            />
                        </Centered>
                        <ButtonPlus onClick={domain.addTime('work')} />
                    </Line>

                    <Line title="Temps de repos">
                        <ButtonMinus onClick={domain.removeTime('rest')} />
                        <Centered>
                            <InputTime
                                onMinutesChanged={domain.onValueChanged('restMinutes')}
                                onSecondsChanged={domain.onValueChanged('restSeconds')}
                                minutes={domain.state.restMinutes}
                                seconds={domain.state.restSeconds}
                                clean={domain.state.cleanValues}
                            />
                        </Centered>
                        <ButtonPlus onClick={domain.addTime('rest')} />
                    </Line>
                </div>
            </Full>
        );
    }
}