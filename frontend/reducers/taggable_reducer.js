import notesFromTagReducer from './notes_from_tag_reducer';
import tagsFromNoteReducer from './tags_from_note_reducer';
import { combineReducers } from 'redux';;


export default combineReducers({
    notesFromTag: notesFromTagReducer,
    tagsFromNote: tagsFromNoteReducer
});