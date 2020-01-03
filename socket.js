// Dependencies
const actions = require('./actions');


const rt = (io, socket) => {

  console.log('An User Connected');
  
  socket.on('open-notepad', () => {
    actions.openNotepad();
  });

  socket.on('open-browser', (url) => {
    actions.openBrowser(url);
  });

  socket.on('open-explorer', () => {
    actions.openExplorer();
  })
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })

}

module.exports = rt;