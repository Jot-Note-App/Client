/**
 * @generated SignedSource<<071d28d96542b26cd977dea810b5f042>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteEntryModalDeleteEntryMutation$variables = {
  connections: ReadonlyArray<string>;
  entryId: string;
};
export type DeleteEntryModalDeleteEntryMutation$data = {
  readonly deleteEntry: {
    readonly __typename: "DeleteEntryMutationSuccess";
    readonly entry: {
      readonly id: string;
    };
  } | {
    readonly __typename: "MutationFailure";
    readonly error: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DeleteEntryModalDeleteEntryMutation = {
  response: DeleteEntryModalDeleteEntryMutation$data;
  variables: DeleteEntryModalDeleteEntryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "entryId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "entryId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "error",
      "storageKey": null
    }
  ],
  "type": "MutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteEntryModalDeleteEntryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteEntry",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Entry",
                "kind": "LinkedField",
                "name": "entry",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "DeleteEntryMutationSuccess",
            "abstractKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DeleteEntryModalDeleteEntryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteEntry",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Entry",
                "kind": "LinkedField",
                "name": "entry",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "deleteEdge",
                    "key": "",
                    "kind": "ScalarHandle",
                    "name": "id",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "DeleteEntryMutationSuccess",
            "abstractKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8306dacea672a088b8dd3e5e2622bbc4",
    "id": null,
    "metadata": {},
    "name": "DeleteEntryModalDeleteEntryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteEntryModalDeleteEntryMutation(\n  $entryId: ID!\n) {\n  deleteEntry(id: $entryId) {\n    __typename\n    ... on DeleteEntryMutationSuccess {\n      entry {\n        id\n      }\n    }\n    ... on MutationFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f1ca4b5acad4ebe4d056697d8c75810";

export default node;
