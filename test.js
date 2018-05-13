const si = require('systeminformation');

console.log('si.version: ', si.version());
console.log('si.time: ', si.time());
si.system()
  .then(data => console.log('info', 'si.system: ' + JSON.stringify(data)))
si.cpu()
  .then(data => console.log('info', 'si.cpu: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpu error: ' + error));
si.bios()
  .then(data => console.log('info', 'si.bios: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.bios error: ' + error));
si.baseboard()
  .then(data => console.log('info', 'si.baseboard: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.baseboard error: ' + error));
si.cpuFlags()
  .then(data => console.log('info', 'si.cpuFlags: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpuFlags error: ' + error));
si.cpuCache()
  .then(data => console.log('info', 'si.cpuCache: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpuCache error: ' + error));
si.cpuCurrentspeed()
  .then(data => console.log('info', 'si.cpu: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpu error: ' + error));
si.cpuTemperature()
  .then(data => console.log('info', 'si.cpuTemperature: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.cpuTemperature error: ' + error));
si.mem()
  .then(data => console.log('info', 'si.mem: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.mem error: ' + error));
si.memLayout()
  .then(data => console.log('info', 'si.memLayout: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.memLayout error: ' + error));
si.diskLayout()
  .then(data => console.log('info', 'si.diskLayout: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.diskLayout error: ' + error));
si.battery()
  .then(data => console.log('info', 'si.battery: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.battery error: ' + error));
si.graphics()
  .then(data => console.log('info', 'si.graphics: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.graphics error: ' + error));
si.osInfo()
  .then(data => console.log('info', 'si.osInfo: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.osInfo error: ' + error));
si.versions()
  .then(data => console.log('info', 'si.versions: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.versions error: ' + error));
si.shell()
  .then(data => console.log('info', 'si.shell: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.shell error: ' + error));
si.users()
  .then(data => console.log('info', 'si.users: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.users error: ' + error));
si.fsSize()
  .then(data => console.log('info', 'si.fsSize: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.fsSize error: ' + error));
si.blockDevices()
  .then(data => console.log('info', 'si.blockDevices: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.blockDevices error: ' + error));
si.fsStats()
  .then(data => console.log('info', 'si.fsStats: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.fsStats error: ' + error));
si.disksIO()
  .then(data => console.log('info', 'si.diskslO: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.diskslO error: ' + error));
si.networkInterfaces()
  .then(data => console.log('info', 'si.networkInterfaces: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.networkInterfaces error: ' + error));
si.networkInterfaceDefault()
  .then(data => console.log('info', 'si.networkInterfaceDefault: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.networkInterfaceDefault error: ' + error));
si.networkStats()
  .then(data => console.log('info', 'si.networkStats: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.networkStats error: ' + error));
si.networkConnections()
  .then(data => console.log('info', 'si.networkConnections: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.networkConnections error: ' + error));
si.inetChecksite('https://google.com')
  .then(data => console.log('info', 'si.inetChecksite: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.inetChecksite error: ' + error));
si.inetLatency()
  .then(data => console.log('info', 'si.inetLatency: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.inetLatency error: ' + error));
si.currentLoad()
  .then(data => console.log('info', 'si.currentLoad: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.currentLoad error: ' + error));
si.fullLoad()
  .then(data => console.log('info', 'si.fullLoad: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.fullLoad error: ' + error));
si.processes()
  .then(data => console.log('info', 'si.processes: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.processes error: ' + error));
si.processLoad('bash')
  .then(data => console.log('info', 'si.processLoad: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.processLoad error: ' + error));
si.services('apache2')
  .then(data => console.log('info', 'si.services: ' + JSON.stringify(data)))
  .catch(error => console.log('info', 'si.services error: ' + error));
