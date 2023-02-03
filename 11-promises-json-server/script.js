const btn = document.querySelector("button");
const divStudents = document.querySelector(".students");
const divErrors = document.querySelector(".errors");

btn.addEventListener("click", async () => {
  try {
    // mindfuck: all in one line
    // const innerResult = await (await fetch("http://localhost:3000/students")).json()

    // await => fetches the stuff and unpacks it => in one step
    const result = await fetch("http://localhost:3000/students");

    // json parser returns a promose too
    // for two reasons
    // 1) can take time for big files
    // 2) can contain invalid data => so can fail!
    const innerResult = await result.json();

    console.log(innerResult);
    innerResult.forEach((stud) => {
      const divStudent = document.createElement("div");
      divStudent.innerText = stud.name;

      divStudents.appendChild(divStudent);
    });

  } catch (err) {
    divErrors.innerText = "Fucking data ist nicht da!"
  }
});
