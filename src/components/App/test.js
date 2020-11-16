const testObj = {
  start: "wah",
  end: "wooh",
  priority: "wee",
  category: "wahay",
  onAgenda: true,
};

const update = { end: "never" };
const update2 = { onAgenda: false };

const newTestObj = { ...testObj, ...update, ...update2 };

console.log(newTestObj);
