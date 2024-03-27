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
        const currentContent = editorState.getCurrentContent();
        const currentSelection = editorState.getSelection();
        const startKey = currentSelection.getStartKey();
        const startOffset = currentSelection.getStartOffset();
        const blockNode = currentContent.getBlockForKey(startKey);
        const textBeforeSelection = blockNode.getText().slice(0, startOffset);
        if (textBeforeSelection.endsWith('\t')) {
            return removeCharsBefore(editorState, 1);
        }
        // Alternatively, remove up to 4 spaces to the left of the selection
        var spaces = '    '
        while (spaces.length > 0) {
            if (textBeforeSelection.endsWith(spaces)) {
                // There is a tab character to the left of the selection
                return removeCharsBefore(editorState, spaces.length);
            }
            spaces = spaces.slice(0, -1)
        }
    } else if (e.code == 'Tab') {
        // Tab key
        e.preventDefault();
        return EditorState.push(
            editorState,
            Modifier.insertText(
                editorState.getCurrentContent(),
                editorState.getSelection(),
                '\t'
            ),
            'insert-characters'
        );

    }
    return editorState;
}
