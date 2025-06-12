const md = window.markdownit({
  html: true // Nécessaire pour interpréter <u>, <b>, etc.
})
  .use(window.markdownitSub)
  .use(window.markdownitSup);

function loadMarkdown(file) {
  fetch('./' + file)
    .then(response => {
      if (!response.ok) throw new Error("Erreur HTTP");
      return response.text();
    })
    .then(text => {
      const container = document.getElementById('markdown-content');
      container.innerHTML = md.render(text);
      if (window.MathJax) MathJax.typeset(); // Pour les formules LaTeX
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML = '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
