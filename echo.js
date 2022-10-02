// Main Functions, (plugin loading, file fetching, etc)
const script = {};
script.load = function(file) {
  import(file).then(value => {
    return(value);
  }).catch(err => {
    return(err);
  });
}

const plunginList = {};
const pl = {};
pl.load = function(file) {
  import(file).then(value => {
    if(pluginList.hasOwnProperty(value.id)) {
      console.error("Unable To Duplicate Plugin IDs");
    } else {
      pluginList[value.id] = value.functions;
    }
  }).catch(err => {
    console.error(err);
  });
}

window.echo = {
  "ver": "0.0.1",
  "version": "0.0.1",
  "v": "0.0.1",
  "info": "Echo Plugin Loader v0.0.1",
  "information": "Echo Plugin Loader v0.0.1",
  "script": script(),
  "s": script(),
  "plugin": pl(),
  "pl": pl()
};
