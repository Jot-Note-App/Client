/**
 * @generated SignedSource<<ec9169e22cb70c98dfa55991ddd7d30b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainPanelJournalEditorQuery$variables = {
  entryId: string;
};
export type MainPanelJournalEditorQuery$data = {
  readonly node: {
    readonly __typename: "Entry";
    readonly content: string | null | undefined;
    readonly id: string;
    readonly title: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
};
export type MainPanelJournalEditorQuery = {
  response: MainPanelJournalEditorQuery$data;
  variables: MainPanelJournalEditorQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entryId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "entryId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPanelJournalEditorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "type": "Entry",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainPanelJournalEditorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "type": "Entry",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef26176692cc96a2b6466890972bce01",
    "id": null,
    "metadata": {},
    "name": "MainPanelJournalEditorQuery",
    "operationKind": "query",
    "text": "query MainPanelJournalEditorQuery(\n  $entryId: ID!\n) {\n  node(id: $entryId) {\n    __typename\n    ... on Entry {\n      id\n      title\n      content\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6609de593a345756b7ab6493d9517b32";

export default node;
