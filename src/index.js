import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Center, Gapped, Input, Button } from '@skbkontur/react-ui/components/all';
import { ValidationContainer, ValidationWrapperV1, tooltip } from '@skbkontur/react-ui-validations';

class App extends React.Component {
  render() {
    return (
      <Center>
        <p>
          <b>react-ui</b> + <b>react-ui-validations</b>
        </p>
        <form onSubmit={(e) => { e.preventDefault(); this.container.submit(); }}>
          <Gapped>
            <ValidationContainer ref={el => this.container = el}>
              <ValidationWrapperV1
                renderMessage={tooltip('left middle')}
                validationInfo={{ message: 'Ошибка!', type: 'submit' }}
              >
                <Input placeholder={'Валидация'} />
              </ValidationWrapperV1>
            </ValidationContainer>
            <Button use="success" type="submit">Ок</Button>
          </Gapped>
        </form>
        <p>
          Форкай, воспроизводи кейсы, делись, <br/>
          прикрепляй к своим issue.
        </p>
      </Center>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
