/*import React, {Compoment} from 'react' == import React from 'react', const Component = React.Component*/

/*import React, {Component} from 'react';

type Props = {
  id?: string,
  defaultValue?: string,
  options: Array<string>,
};

type State = {
  value: string,
};

class Suggest extends Component {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {value: defaultValue || ''};
  }

  getValue(): string {
    return this.state.value;
  }

  render() {
    const randomid: string = math.random().toString(16).substring(2);
    return (
      <div>
        <input
          id={randomid}
          defaultValue={this.props.defaultValue}
          onChange={event => this.setState({value: event.target.value})}
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((items: string, idx: number)=>
            <option key={idx} value={items}></option>
          )
        }</datalist>
      </div>
    );
  }
}*/

import React, {Component} from 'react';

type Props = {
  id?: string,
  defaultValue?: string,
  options: Array<string>,
};

type State = {
  value: string,
};

class Suggest extends Component {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {value: props.defaultValue || ''};
  }

  getValue(): string {
    return this.state.value;
  }

  render() {
    const randomid: string = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((item: string, idx: number) =>
            <option value={item} key={idx} />
          )
        }</datalist>
      </div>
    );
  }
}

export default Suggest

