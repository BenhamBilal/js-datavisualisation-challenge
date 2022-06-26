(() => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", "800");
  canvas.setAttribute("height", "400");
  canvas.setAttribute("id", "chart3");

  const hTitle = document.getElementById("firstHeading");
  hTitle.after(canvas);

  const config = {
    type: "line",
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
    },
    data: {
      labels: [],
      datasets: [
        {
          label: "",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [],
        },
      ],
    },
  };

  const myChart = new Chart(document.getElementById("chart3"), config);

  let labels = [];
  let datas = [];
  let x = 0;

  const update = () => {
    fetch("https://canvasjs.com/services/data/datapoints.php", {
      cache: "no-cache",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((element) => {
          labels.push(x);
          x++;
          datas.push(element[1]);
        });
        myChart.config.data.labels = labels;
        myChart.config.data.datasets[0].data = datas;
        myChart.update();
      });
  };

  setInterval(update, 1000);
})();
