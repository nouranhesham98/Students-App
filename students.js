const fs = require("fs");
const addData = (id, name, degree) => {
  const stud_data = loadData(); //btrga3 array of objects
  // console.log (stud_data)

  const duplicatedId = stud_data.filter((data) => {
    return data.id === id;
  });
  console.log(duplicatedId);
  if (duplicatedId.length === 0) {
    total = 0;
    degree.forEach((deg) => {
      total += deg
    });
    stud_data.push({
      id,
      name,
      degree,
      total,
    });

    saveData(stud_data);
    console.log("Saved !");
  } else {
    console.log("Error ! Duplicatteedd id");
  }
  // console.log(stud_data)
};

const loadData = () => {
  try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data); //by7wel json l object
  } catch (e) {
    return [];
  }
};
const saveData = (stud_data) => {
  const save = JSON.stringify(stud_data);
  console.log(stud_data);
  fs.writeFileSync("students.json", save);
};

const deleteData = (id) => {
  const stud_data = loadData();
  const datatokeep = stud_data.filter((idd) => {
    /**
     * id1 !==id1
     */
    return idd.id !== id;
  });
  console.log(datatokeep);
  if (stud_data.length !== datatokeep.length) {
    saveData(datatokeep);
    console.log("Deleted Succesfually");
  } else {
    console.log("id nott Founnd");
  }
};
const readData = (id) => {
  const dataa = loadData();
  const data = dataa.find((d) => {
    return d.id === id;
  });
  console.log(data);
  if (data) {
    console.log(data.name, data.degree);
  } else {
    console.log("Not Found");
  }
};

const listData = () => {
  const data = loadData();
  data.forEach((da) => {
    console.log(da.name, da.degree);
  });
};

module.exports = {
  addData,
  deleteData,
  readData,
  listData,
};
