/**
 * @generated SignedSource<<18d4da2e403d729e3cf75d64791fd2ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteJournalModalDeleteJournalMutation$variables = {
  connections: ReadonlyArray<string>;
  journalId: string;
};
export type DeleteJournalModalDeleteJournalMutation$data = {
  readonly deleteJournal: {
    readonly __typename: "DeleteJournalMutationSuccess";
    readonly journal: {
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
export type DeleteJournalModalDeleteJournalMutation = {
  response: DeleteJournalModalDeleteJournalMutation$data;
  variables: DeleteJournalModalDeleteJournalMutation$variables;
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
  "name": "journalId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "journalId"
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
    "name": "DeleteJournalModalDeleteJournalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteJournal",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Journal",
                "kind": "LinkedField",
                "name": "journal",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "DeleteJournalMutationSuccess",
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
    "name": "DeleteJournalModalDeleteJournalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteJournal",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Journal",
                "kind": "LinkedField",
                "name": "journal",
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
            "type": "DeleteJournalMutationSuccess",
            "abstractKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2d641f7d04fe8242bcdd930ebd9ae31b",
    "id": null,
    "metadata": {},
    "name": "DeleteJournalModalDeleteJournalMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteJournalModalDeleteJournalMutation(\n  $journalId: ID!\n) {\n  deleteJournal(id: $journalId) {\n    __typename\n    ... on DeleteJournalMutationSuccess {\n      journal {\n        id\n      }\n    }\n    ... on MutationFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4fd101f949f8bebfc313d1b432e1ca9b";

export default node;
