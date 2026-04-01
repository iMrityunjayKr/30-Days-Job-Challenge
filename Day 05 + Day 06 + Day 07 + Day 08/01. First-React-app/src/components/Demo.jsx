import { useState, useEffect } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //write form validation logic
    // console.log(e.target.name.value);
    if (name.length > 0 && email.length > 0 && email.includes("@")) {
      setError("Form submitted Successfully");
      setName("");
      setEmail("");
    } else {
      setError("Check you details and try again!!!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="field">
        <input type="submit" value="Submit" />
      </div>
      {error && <h2>{error}</h2>}
    </form>
  );
}

function Demo() {
  return <ContactForm />;
}

// --------------Example-----------
function Student(props) {
  return <li>{props.name}</li>;
}

function Demo4() {
  const students = ["Arun", "Rohan", "Nitin", "Dipti", "Prakash"];
  return (
    <>
      <h1>Students List</h1>
      <ul>
        {students.map((n) => (
          <Student name={n} />
        ))}
      </ul>
    </>
  );
}

// --------------Example-----------
function LoginSuccess() {
  return <h1>Thank you for coming back!</h1>;
}

function LoginFail() {
  return <h1>Login Failed..</h1>;
}

function Login(props) {
  const [username, setUsername] = useState("mysirg");
  const [password, setPassword] = useState("1234");
  return username === props.username && password === props.password ? (
    <LoginSuccess />
  ) : (
    <LoginFail />
  );
}
function Demo3() {
  return (
    <>
      <Login username="mysirg" password="1234" />
    </>
  );
}
// ---------------Example------
function F1(props) {
  return <h1 style={{ color: props.color }}>{props.text}</h1>;
}
function Demo2() {
  const [textColor, setTextColor] = useState("green");
  const [text, setText] = useState(`I like ${textColor} color`);
  useEffect(() => {
    setText(`I like ${textColor} color.`);
  });
  return (
    <div>
      <F1 color={textColor} text={text} />
      <button onClick={() => setTextColor(() => "red")}>RED</button>
      <button onClick={() => setTextColor(() => "purple")}>PURPLE</button>
      <button onClick={() => setTextColor(() => "blue")}>BLUE</button>
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
    </div>
  );
}

function Demo1() {
  const [i, setI] = useState(0);
  const [day, setDay] = useState("Sun");

  useEffect(() => {
    console.log("Hello");
  });
  return (
    <>
      <h1>
        {i} - {day}
      </h1>
      <button onClick={() => setI(i + 1)}>Change Day</button>
    </>
  );
}
export default Demo;
