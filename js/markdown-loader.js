const md = window.markdownit()
  .use(window.markdownitSub)
  .use(window.markdownitSup);

function loadMarkdown(file) {
  fetch('./' + file)
    .then(response => {
      if (!response.ok) throw new Error("Erreur HTTP");
      return response.text();
    })
    .then(text => {
      document.getElementById('markdown-content').innerHTML = md.render(text);
      if (window.MathJax) MathJax.typeset(); // Re-rendu LaTeX après insertion
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML = '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
