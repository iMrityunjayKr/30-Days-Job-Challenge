function F1() {
  const a = 5;
  return (
    <>
      <h2>This is heading 2 </h2>
      <h3 className="e1">
        {a % 2 == 0
          ? `Square of ${a} : ${a * a}`
          : `Cube of ${a} : ${a * a * a}`}
      </h3>

      <h4></h4>
    </>
  );
}
export default F1;
