const md = window.markdownit()
  .use(window.markdownitSub)
  .use(window.markdownitSup);

function loadMarkdown(file) {
  fetch(file)
    .then(response => response.text())
    .then(text => {
      document.getElementById('markdown-content').innerHTML = md.render(text);
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML = '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
