import { students as initialStudents, students } from "./info.js";

const tbody = document.getElementById("tbody");
const formPopup = document.getElementById("formPopup");
const studentForm = document.getElementById("studentForm");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("search");
const gradeFilter = document.getElementById("gradeFilter");
const attendanceFilter = document.getElementById("attendanceFilter");

if (!localStorage.getItem("students")) {
  localStorage.setItem("students", JSON.stringify(initialStudents));
}

const getStudents = () => {
  try {
    return JSON.parse(localStorage.getItem("students")) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const saveStudents = (students) => {
  try {
    localStorage.setItem("students", JSON.stringify(students));
  } catch (e) {
    console.error(e);
  }
};

const calculateAvgGrade = (subjects) => {
  const total = subjects.reduce((sum, s) => sum + (s.score || 0), 0);
  return subjects.length ? total / subjects.length : 0;
};

const calculateAttendance = ({ totalAcademicDays, presentDays }) => {
  return totalAcademicDays ? (presentDays / totalAcademicDays) * 100 : 0;
};

const renderStudents = (list = getStudents()) => {
  tbody.innerHTML = "";

  if (!list || list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; font-weight: bold;">
          ${getStudents().length === 0 ? "No records available." : "No data found."}
        </td>
      </tr>`;
    return;
  }

  list.forEach((s) => {
    const avg = calculateAvgGrade(s.academics.subjects).toFixed(2);
    const att = calculateAttendance(s.attendance).toFixed(2);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.id}</td>
      <td>${s.personal.name}</td>
      <td>${s.personal.age}</td>
      <td>${s.personal.gender}</td>
      <td>${s.personal.contact.email}</td>
      <td>${s.personal.contact.phone}</td>
      <td>${s.personal.address.city}, ${s.personal.address.state}</td>
      <td>${avg}%</td>
      <td>${att}%</td>
      <td>
        <button data-edit-id="${s.id}">Edit</button>
        <button data-view-id="${s.id}">View</button>
        <button data-delete-id="${s.id}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
};

function buildStudentObject() {
  const idVal = document.getElementById("studentId").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value || "";

  const personal = {
    name: document.getElementById("name").value,
    age: Number(document.getElementById("age").value),
    gender,
    contact: {
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    },
    address: {
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
    },
  };

  const defaultSubs = initialStudents[0].academics.subjects.map((subj) => ({
    subjectId: subj.subjectId,
    score: 0,
    total: subj.total,
  }));

  const academics = {
    total_subject_scores: defaultSubs.length * defaultSubs[0].total,
    subjects: defaultSubs,
  };

  const attendance = {
    totalAcademicDays: 0,
    presentDays: 0,
  };

  return {
    id: idVal ? Number(idVal) :(students.length)? Math.max(... students.map(s => s.id)) +1 : 1,
    personal,
    academics,
    attendance,
  };
}

function handleStudentSave(student) {
  const students = getStudents();
  const index = students.findIndex((s) => s.id === student.id);

  if (index >= 0) {
    const confirmUpdate = confirm("Update existing student details?");
    if (!confirmUpdate) return false;
    students[index] = student;
  } else {
    students.push(student);
  }

  saveStudents(students);
  renderStudents();
  return true;
}

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.querySelector(".save").disabled) {
    return;
  }

  const student = buildStudentObject();
  if (handleStudentSave(student)) {
    closeForm();
  }
});

addBtn.addEventListener("click", () => openForm());
cancelBtn.addEventListener("click", () => closeForm());

let currentEditId = null;

function openForm(student = null, isReadOnly = false) {
  formPopup.classList.add("active");
  currentEditId = student?.id || null;
  document.getElementById("studentId").value = student?.id || "";

  if (student) {
    document.getElementById("name").value = student.personal.name;
    document.getElementById("age").value = student.personal.age;
    document.getElementById("email").value = student.personal.contact.email;
    document.getElementById("phone").value = student.personal.contact.phone;
    document.getElementById("city").value = student.personal.address.city;
    document.getElementById("state").value = student.personal.address.state;
    document.getElementById("genderMale").checked = student.personal.gender === "Male";
    document.getElementById("genderFemale").checked = student.personal.gender === "Female";
  }

  const fields = document.querySelectorAll("#studentForm input, #studentForm select, #studentForm textarea");
  fields.forEach(field => {
    if (isReadOnly) {
      field.setAttribute("readonly", "readonly");
      field.setAttribute("disabled", "disabled");
    } else {
      field.removeAttribute("readonly");
      field.removeAttribute("disabled");
    }
  });

  const submitBtn = document.querySelector(".save");
  if (isReadOnly) {
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    submitBtn.removeAttribute("disabled");
  }
}

function closeForm() {
  studentForm.reset();
  formPopup.classList.remove("active");
  currentEditId = null;
}

document.addEventListener("click", (e) => {
  const bt = e.target;

  if (bt.matches("[data-edit-id]")) {
    const id = Number(bt.dataset.editId);
    if (confirm("Are you sure you want to edit this student?")) {
      const student = getStudents().find((s) => s.id === id);
      if (!student) {
        console.error("Student not found!");
        return;
      }
      openForm(student);
    }
  }

  if (bt.matches("[data-view-id]")) {
    const id = Number(bt.dataset.viewId);
    const student = getStudents().find((s) => s.id === id);
    if (!student) {
      console.error("Student not found!");
      return;
    }
    openForm(student, true);
  }

  if (bt.matches("[data-delete-id]")) {
    const id = Number(bt.dataset.deleteId);
    if (confirm("Delete this student?")) {
      const updated = getStudents().filter((s) => s.id !== id);
      saveStudents(updated);
      renderStudents();
    }
  }
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  renderStudents(
    getStudents().filter(
      (s) =>
        s.personal.name.toLowerCase().includes(q)
        || s.id.toString().includes(q),
    )
  );
});

gradeFilter.addEventListener("change", () => {
  const min = Number(gradeFilter.value);
  renderStudents(
    min
      ? getStudents().filter(
        (s) => calculateAvgGrade(s.academics.subjects) > min
      )
      : getStudents()
  );
});

attendanceFilter.addEventListener("change", () => {
  const max = Number(attendanceFilter.value);
  renderStudents(
    max
      ? getStudents().filter(
        (s) => calculateAttendance(s.attendance) < max
      )
      : getStudents()
  );
});

renderStudents();