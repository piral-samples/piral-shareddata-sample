import * as React from "react";

export default ({ piral }) => {
  const foo = piral.getData("foo");
  const qxz = piral.getData("qxz");

  return (
    <>
      <h1>Foo: {foo}</h1>
      <p>
        Value of qxz is <strong>{qxz}</strong>
      </p>
    </>
  );
};
