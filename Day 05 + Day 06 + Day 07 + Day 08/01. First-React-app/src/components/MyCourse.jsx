import { useState } from "react";

function MyCourse() {
  //   const [course, setCourse] = useState("Python");
  //   const [duration, setDuration] = useState("3 months");

  const [learn, setLearn] = useState({
    course: "Python",
    duration: "3 months",
  });
  const updateDuration = () => {
    let d = document.getElementById("duration");
    setLearn((prev) => {
      return { ...prev, duration: d.value };
    });
  };

  return (
    <>
      <h1>My Course name is {learn.course}</h1>
      <h2>Duration is {learn.duration}</h2>
      <input type="text" id="duration" placeholder={learn.duration} />
      <br />
      <br />
      <button onClick={updateDuration}>Change Duration</button>
    </>
  );
}
export default MyCourse;
