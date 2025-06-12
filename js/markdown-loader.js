document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-md]").forEach(div => {
    const mdFile = div.getAttribute("data-md");
    fetch(mdFile)
      .then(response => response.text())
      .then(text => {
        div.innerHTML = marked.parse(text);
      })
      .catch(error => {
        div.innerHTML = "<p style='color:red;'>Erreur de chargement du fichier.</p>";
        console.error(error);
      });
  });
});
// Chargement automatique via data-md
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-md]").forEach(div => {
    const mdFile = div.getAttribute("data-md");
    fetch(mdFile)
      .then(response => response.text())
      .then(text => {
        div.innerHTML = marked.parse(text);
      })
      .catch(error => {
        div.innerHTML = "<p style='color:red;'>Erreur de chargement du fichier.</p>";
        console.error(error);
      });
  });
});

// Chargement manuel à l’appel explicite
function loadMarkdown(file) {
  fetch(file)
    .then(response => response.text())
    .then(text => {
      const container = document.getElementById('markdown-content');
      container.innerHTML = marked.parse(text);
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML = '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
