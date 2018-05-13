const si = require('systeminformation');

si.system()
  .then(data => console.log('info', 'si.system: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.system error: ' + error));
si.cpu()
  .then(data => console.log('info', 'si.cpu: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpu error: ' + error));
si.system(function(data) {
  console.log('info', 'si.system 2: ' + JSON.stringify(data));
});
si.cpu(function(data) {
  console.log('info', 'si.cpu 2: ' + JSON.stringify(data));
});

