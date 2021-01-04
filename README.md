# NickNote
Nicknote is an elegant, fully functional full-stack Evernote clone built on React / Redux and Ruby on Rails. [Live link](https://nicknote.herokuapp.com/) :).

## Key Features && MVPs
 * Create, favorite and move notes between notebooks.
 * Create notebooks.
 * Create tags for notes.
 * Search and filter notes by tag.
 * Autosave!
 * Rich text edting.

## Architecture & Technologies
  * Frontend: React / Redux, JavaScript, Node.js, Webpack, CKEditor 5 
  * Backend: Ruby on Rails, JBuilder, Postgresql, SQL
  
 ![nicknote gif](/app/assets/images/nicknote.gif)
  
## Dee

It became semantic that the user had access to four 'notebooks', All Notes, Trash, Tag Notebook and Any Notebook. These container components all shared the same 'notebook' and 'notepad' component which means almost all info on those panges is dynamically generated or passed in from the container. This improved speed a lot, both because the same component could be rendered each time and that everything each notebook needed was fetched from the database on mounting. This also made changing the code later in the process easier as only two components needed to be addressed. The only issue was visual as each notebook needed slightly different styling.





