import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>Component B</h3>
      <ComponentC />
    </div>
  );
}

export default ComponentB;