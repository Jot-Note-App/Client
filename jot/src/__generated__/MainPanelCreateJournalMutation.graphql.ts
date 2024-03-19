/**
 * @generated SignedSource<<8d058541c48f74557bb6cd43771dbee6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MainPanelCreateJournalMutation$variables = {
  connections: ReadonlyArray<string>;
  name: string;
  userId: string;
};
export type MainPanelCreateJournalMutation$data = {
  readonly createJournal: {
    readonly __typename: "CreateJournalMutationSuccess";
    readonly journalEdge: {
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
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
export type MainPanelCreateJournalMutation = {
  response: MainPanelCreateJournalMutation$data;
  variables: MainPanelCreateJournalMutation$variables;
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
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "JournalEdge",
  "kind": "LinkedField",
  "name": "journalEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Journal",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPanelCreateJournalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createJournal",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/)
            ],
            "type": "CreateJournalMutationSuccess",
            "abstractKey": null
          },
          (v6/*: any*/)
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
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "MainPanelCreateJournalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createJournal",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "prependEdge",
                "key": "",
                "kind": "LinkedHandle",
                "name": "journalEdge",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "type": "CreateJournalMutationSuccess",
            "abstractKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae172c9f1b247f3c9be280c43086d06e",
    "id": null,
    "metadata": {},
    "name": "MainPanelCreateJournalMutation",
    "operationKind": "mutation",
    "text": "mutation MainPanelCreateJournalMutation(\n  $name: String!\n  $userId: ID!\n) {\n  createJournal(input: {name: $name, userId: $userId}) {\n    __typename\n    ... on CreateJournalMutationSuccess {\n      journalEdge {\n        node {\n          id\n          name\n        }\n      }\n    }\n    ... on MutationFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d427077b8442ab98f636ca758ec71dd";

export default node;
