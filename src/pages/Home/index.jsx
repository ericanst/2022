import React, { useState } from "react";
import { Button } from "antd";

import './index.less'

export default function Counter() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);
  const count = (item) => {
    setNum(num * 10 + item);
  };
  const create = () => {
    let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return a.map((item, index) => {
      return (
        <Button key={Math.random()} className="btn" type="primary" onClick={() => count(item)}>
          {item}
        </Button>
      );
    });
  };
  const add = () => {
    setResult(result + num);
    setNum(0);
  };
  const sum = () => {
    setResult(result + num);
    setNum(0);
  };
  return (
    <div className="main">
      {create()}
      <Button className="btn" type="primary" onClick={add}>
        +
      </Button>
      <Button className="btn" type="primary" onClick={sum}>
        =
      </Button>
      <div className="result">{result}</div>
    </div>
  );
}
