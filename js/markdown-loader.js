const md = window.markdownit({
  html: true, // <u> et autres balises HTML autorisées
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
      const content = md.render(text);
      const container = document.getElementById('markdown-content');
      container.innerHTML = content;
      if (window.MathJax) MathJax.typeset(); // Pour les équations
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML =
        '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
