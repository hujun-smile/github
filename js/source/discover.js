'use strict';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Logo from  './components/Logo';
import Excel from './components/Excel';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Form from './components/Form';
import Actions from './components/Actions';
import Dialog from './components/Dialog';
import Whinepad from './components/Whinepad';

var headers = [
  "Book", "Author", "Language", "Published", "Sales"
];

var data = [
  ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
  ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
  ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
  ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
];

ReactDOM.render(
  <div style={ {padding: '20px'} }>
    <h1>Component discoverer</h1>
    <h2>Logo</h2>
    <div style={{display: 'inline-block', background: 'purple'}}><Logo/></div>

    <h2>Table</h2>
    <div className="Excel"><Excel initialData={data} headers={headers}/></div>

    <h2>Buttons</h2>
    <div>Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button></div>
    <div>A link: <Button href="http://reactjs.com" className={Button}>Follow me</Button></div>
    <div>Custom class name: <Button className="Custom">I do nothing</Button></div>

    <h2>Suggest</h2>
    <div><Suggest options={['ennie', 'meenie', 'miney', 'mo']} /></div>

    <h2>Rating</h2>
    <div>No initial value: <Rating></Rating></div>
    <div>Initial value 4: <Rating defaultValue={4}></Rating></div>
    <div>This one goes to 11: <Rating max={11}></Rating></div>
    <div>Read-only: <Rating readonly={true} defaultValue={3}></Rating></div>

    <h2>Form inputs</h2>
    <table>
      <tbody>
        <tr>
          <td>Vanilla input</td>
          <td><FormInput /></td>
        </tr>
        <tr>
          <td>Prefilled</td>
          <td><FormInput defaultValue="it's like a default "/></td>
        </tr>
        <tr>
          <td>Year</td>
          <td><FormInput type="year" /></td>
        </tr>
        <tr>
          <td>Rating</td>
          <td><FormInput type="rating" defaultValue={4} /></td>
        </tr>
        <tr>
          <td>Suggest</td>
          <td><FormInput
            type="suggest"
            options={['red', 'green', 'blue']}
            defaultValue="green"
            />
          </td>
        </tr>
        <tr>
          <td>Vanilla textarea</td>
          <td><FormInput type="text"/></td>
        </tr>
      </tbody>
    </table>

    <Form
      fields={[
        {label: 'Rating', type: 'rating', id: 'rateme'},
        {label: 'Greetings', id: 'freetext'},
      ]}
      inititalData={ {rateme: 4, freetext: 'hello'}} />

    <h2>Actions</h2>
    <div><Actions onAction={type => alert(type)} /></div>

    <h2>Dialog</h2>
    <div><Dialog
      header="Out of the box example"
      onAction={type => alert(type)}>
      Hello, dialog!
    </Dialog></div>
    <p>&nbsp;</p>
    <div><Dialog
      header="No cancel, custom button"
      hasCancel={false}
      confirmLabel="Whatever"
      onAction={type => alert(type)}>
      Anything goes here, see: <Button>A button</Button>
    </Dialog></div>

  </div>,
  document.getElementById('app')
);

