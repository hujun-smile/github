import Rating from './Rating';
import React, {Component} from 'react';
import Suggest from './Suggest';

type FormInputFieldType = 'year' | 'suggest' | 'rating' | 'input' | 'text';

export type FormInputFieldValue = string | number;

export type FormInputField = {
  type: FormInputFieldType,
  defaultValue?: FormInputFieldValue,
  id?: string,
  options: Array<string>,
  label?: string,
};

class FormInput extends Component {

  props: FormInputField;

  static defaultProps = {
    type: 'input',
  };

  getValue(): FormInputFieldValue {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const comm: Object ={
      ref: 'input',
      id: this.props.id,
      defaultValue: this.props.defaultValue
    };
    switch (this.props.type) {
      case 'year':
        return (
          <input
            {...comm}
            type="number"
            defaultValue={this.props.defaultValue || new Date().getFullYear()}
          />
        );
      case 'suggest':
        return (
          <Suggest
            {...comm} options={this.props.options} />
        );
      case 'rating':
        return (
          <Rating
            {...comm} defaultValue={parseInt(this.props.defaultValue.toString(10))} />
        );
      case 'text':
        return <textarea {...comm}></textarea>;
      default:
        return <input {...comm} type="text" />;
    }
  }
}

export default FormInput