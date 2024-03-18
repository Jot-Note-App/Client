/**
 * @generated SignedSource<<37615c8ae8dfe6f1344441bebb799c11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MainPanelCreateJournalMutation$variables = {
  name: string;
  userId: string;
};
export type MainPanelCreateJournalMutation$data = {
  readonly createJournal: {
    readonly __typename: "JournalMutationSuccess";
    readonly journal: {
      readonly id: string;
      readonly name: string;
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "concreteType": null,
    "kind": "LinkedField",
    "name": "createJournal",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
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
        "type": "JournalMutationSuccess",
        "abstractKey": null
      },
      {
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPanelCreateJournalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainPanelCreateJournalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "14689c1b83df205cb29275a0d2e67009",
    "id": null,
    "metadata": {},
    "name": "MainPanelCreateJournalMutation",
    "operationKind": "mutation",
    "text": "mutation MainPanelCreateJournalMutation(\n  $name: String!\n  $userId: ID!\n) {\n  createJournal(input: {name: $name, userId: $userId}) {\n    __typename\n    ... on JournalMutationSuccess {\n      journal {\n        id\n        name\n      }\n    }\n    ... on MutationFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "102bafcbea6b83726db0365a3b6065cf";

export default node;
