# README
Nicknote is a Evernote clone.

[Live link here](https://nicknote.herokuapp.com/)

Key Features
 * Creating, saving, favoriting and moving notes between notebooks
 * Search bar for notes.
 * Creating notebooks.
 * Creating tags for notes.
 * Filtering notes by tag.

It became semantic that the user had access to four 'notebooks', All Notes, Trash, Tag Notebook and Any Notebook. These container components all shared the same 'notebook' and 'notepad' component which means almost all info on those panges is dynamically generated or passed in from the container. This improved speed a lot, both because the same component could be rendered each time and that everything each notebook needed was fetched from the database on mounting. This also made changing the code later in the process easier as only two components needed to be addressed. The only issue was visual as each notebook needed slightly different styling.





