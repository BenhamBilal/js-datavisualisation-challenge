(() => {
  const table = document.getElementById("table1");
  const canvas = document.createElement("canvas");

  canvas.setAttribute("width", "800");
  canvas.setAttribute("heigth", "600");
  canvas.setAttribute("id", "chart1");
  table.before(canvas);

  const getYears = () => {
    let array = [];
    const tr = [...table.querySelectorAll("tbody > tr")][0];
    const ths = tr.querySelectorAll("th");
    ths.forEach((th) => {
      if (th.innerText !== "") {
        array.push(th.innerText);
      }
    });
    return array;
  };

  const years = getYears();

  const getDatasets = () => {
    let array = [];
    let trs = [...table.querySelectorAll("tbody > tr")];
    trs.shift();
    trs.forEach((tr) => {
      let object = {
        data: [],
      };

      let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      object.backgroundColor = color;
      object.borderColor = color;

      [...tr.querySelectorAll("td")].forEach((td, i) => {
        if (i === 0) {
          object.label = td.innerText;
        } else {
          td.innerText = td.innerText.replace(/,/g, ".");
          object.data.push(parseFloat(td.innerText));
        }
      });
      array.push(object);
    });
    return array;
  };

  const config = {
    type: "line",
    data: {
      labels: years,
      datasets: getDatasets(),
    },
  };

  const myChart = new Chart(document.getElementById("chart1"), config);
})();
