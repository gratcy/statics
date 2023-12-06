const fs = require("fs");

fs.readFile("./area/city.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const pData = JSON.parse(data).map(o => {
    o.id = parseInt(o.id)
    // o.district_id = parseInt(o.district_id)
    o.parent = parseInt(o.parent)
    return o
  })

  fs.writeFileSync("./area/city2.json", JSON.stringify(pData), 'utf8');
});
