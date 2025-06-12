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
