import React from 'react';

class Excel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
      headers: props.headers,
    };
  }

  render () {
    return (
      <table>
        <thead>
        <tr>
          {
            this.state.headers.map(function (title, idx) {
              return <th key={idx}>{title}</th>;
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          this.state.data.map(function (row, rowIdx) {
            return (<tr key={rowIdx}>
              {
                row.map(function (cell, idx) {
                  return (<td key={idx}>{cell}</td>);
                })
              }
            </tr>);
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Excel
