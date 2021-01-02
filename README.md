# NickNote
Nicknote is an elegant, fully functional full-stack Evernote clone.[Live link](https://nicknote.herokuapp.com/) :).

## Key Features
 * Create, favorite and move notes between notebooks.
 * Create notebooks.
 * Create tags for notes.
 * Search and filter notes by tag.
 * Forgiving autosave.
 * Rich text edting

## Architecture & Technologies
  * Frontend: React-Redux, Node.js, Webpack
  * React-Quill.js
  * 
  * 

It became semantic that the user had access to four 'notebooks', All Notes, Trash, Tag Notebook and Any Notebook. These container components all shared the same 'notebook' and 'notepad' component which means almost all info on those panges is dynamically generated or passed in from the container. This improved speed a lot, both because the same component could be rendered each time and that everything each notebook needed was fetched from the database on mounting. This also made changing the code later in the process easier as only two components needed to be addressed. The only issue was visual as each notebook needed slightly different styling.





