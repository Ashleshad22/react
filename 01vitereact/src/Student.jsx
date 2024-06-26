function Student(props) {
  console.log(props.name);
  return (
    <>
      <h1>Hello {props.name}</h1>
      <h2>Email: {props.email}</h2>
    </>
  );
}

export default Student;
