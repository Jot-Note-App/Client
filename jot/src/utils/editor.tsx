import { EditorState, convertFromRaw, ContentState, convertToRaw } from "draft-js";

export const convertStringToEditorState = (content: string | null | undefined): EditorState => {
    const contentStateString = content || ''
    var contentState;
    try {
        contentState = convertFromRaw(JSON.parse(contentStateString));

    } catch (error) {
        // If string is not a valid JSON, create a new ContentState initialized with the string
        contentState = ContentState.createFromText(contentStateString);
    }
    return EditorState.createWithContent(contentState);
}

export const getPlainTextFromEditorState = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return rawContentState.blocks.map(block => block.text).join('\n');
};
