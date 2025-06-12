# Mettre à jour markdown-loader.js avec un chemin relatif plus sûr
corrected_markdown_it_loader = '''\
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
    })
    .catch(err => {
      document.getElementById('markdown-content').innerHTML = '<p style="color:red;">Erreur de chargement du fichier Markdown.</p>';
      console.error(err);
    });
}
'''

# Écrire la nouvelle version dans le fichier markdown-loader.js
with open(markdown_loader_path, 'w', encoding='utf-8') as file:
    file.write(corrected_markdown_it_loader)

# Créer un nouveau zip avec ce correctif
corrected_zip_path = "/mnt/data/site_prof_phil-markdownit-chemin-corrige.zip"
shutil.make_archive(corrected_zip_path.replace(".zip", ""), 'zip', project_root)

corrected_zip_path
