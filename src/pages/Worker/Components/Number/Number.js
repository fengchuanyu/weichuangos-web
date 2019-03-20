import React, { Component } from 'react';
import { Input } from 'antd';

const random = randomnumber;
function randomNumber() {
  var randomnumber = Math.round(Math.random() * 1000);
  return randomnumber;
}

class Number extends React.Component {
  render() {
    return (
      <div>
        <Input onClick={randomNumber()} value={random} />
      </div>
    );
  }
}
