var ctx = document.getElementById('myChart');

const barData = {
  labels: ['Save Product', 'Click to buy', 'Inspiring Ideas', 'User Reviews'],
  datasets: [{
    axis: 'y',
    data: [80, 70, 60, 80],
    fill: false,
    backgroundColor: [
    'rgba(120, 1, 22, 0.75)',
    'rgba(216, 87, 42, 0.75)',
    // 'rgba(255, 205, 86, 0.5)',
    'rgba(219, 124, 38, 0.75)',
    'rgba(247, 181, 56, 0.75)',
    'rgba(153, 102, 255, 0.5)',
    // 'rgba(201, 203, 207, 0.5)'
    ],
    borderColor: [
    'rgb(120, 1, 22)',
    'rgb(216, 87, 42)',
    // 'rgb(255, 205, 86)',
    'rgb(219, 124, 38)',
    'rgb(247, 181, 56)',
    'rgb(153, 102, 255)',
    // 'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
  };

var myChart = new Chart(ctx, {
  type: 'bar',
  data: barData,
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{   
      legend: {
        display: false
              },
    }
    
  }
});



  