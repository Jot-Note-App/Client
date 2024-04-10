import { EditorState, convertFromRaw, ContentState, convertToRaw, Modifier, SelectionState } from "draft-js";

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

// Remove the specified number of characters before the current selection
const removeCharsBefore = (editorState: EditorState, numChars: number): EditorState => {
    const currentContent = editorState.getCurrentContent();
    const currentSelection = editorState.getSelection();
    const startOffset = currentSelection.getStartOffset() - numChars;
    if (startOffset >= 0) {
        const newSelection = currentSelection.set(
            'anchorOffset',
            startOffset
        ) as SelectionState;
        const newContent = Modifier.removeRange(
            currentContent,
            newSelection,
            'backward'
        );
        const newEditorState = EditorState.push(
            editorState,
            newContent,
            'remove-range'
        );
        return newEditorState;
    }
    return editorState;
}

export const handleEditorKeyCommand = (e: React.KeyboardEvent<HTMLDivElement>, editorState: EditorState): EditorState => {
    if (e.code == 'Tab' && e.shiftKey) {
        e.preventDefault();
    } else if (e.code == 'Tab') {
        e.preventDefault();
    }
    return editorState;
}
