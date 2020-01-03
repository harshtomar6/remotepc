// Dependencies
const { exec } = require('child_process');

const openNotepad = () => {
  let cmd = exec('notepad', (error, stdout, stderr) => {
    if(error)
      console.log(error);
    console.log(stdout);
    console.log(stderr);
  })
}

const openBrowser = url => {
  console.log(url)
  let pattern =/([http || https]\:\/\/)+([www || \w])+(.)+(\w)+(.)+([A-Za-z])/;

  if(!pattern.test(url))
    url = 'https://google.co.in/search?q='+url.split(' ').join('+')

  let cmd = exec('start '+url, (error, stdout, stderr) => {
    if(error)
      console.log(error);
    console.log(stdout);
    console.log(stderr);
  })
}

const openExplorer = ()=> {
  let cmd = exec('explorer', (error, stdout, stderr) => {
    if(error)
      console.log(error);
    console.log(stdout);
    console.log(stderr);
  })
}

module.exports = {
  openNotepad,
  openBrowser,
  openExplorer
}