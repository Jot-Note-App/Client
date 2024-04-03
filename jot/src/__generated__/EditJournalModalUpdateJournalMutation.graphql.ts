/**
 * @generated SignedSource<<b07d3ea4f94f388183aab7e660e5b248>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditJournalModalUpdateJournalMutation$variables = {
  journalId: string;
  name: string;
  ordinal: number;
};
export type EditJournalModalUpdateJournalMutation$data = {
  readonly updateJournal: {
    readonly __typename: "JournalMutationSuccess";
    readonly journal: {
      readonly id: string;
      readonly name: string;
      readonly ordinal: number;
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
export type EditJournalModalUpdateJournalMutation = {
  response: EditJournalModalUpdateJournalMutation$data;
  variables: EditJournalModalUpdateJournalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "journalId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ordinal"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "journalId"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "ordinal",
            "variableName": "ordinal"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "updateJournal",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ordinal",
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
    "name": "EditJournalModalUpdateJournalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditJournalModalUpdateJournalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3156377a6e1f0946e380fd6093676b75",
    "id": null,
    "metadata": {},
    "name": "EditJournalModalUpdateJournalMutation",
    "operationKind": "mutation",
    "text": "mutation EditJournalModalUpdateJournalMutation(\n  $journalId: ID!\n  $name: String!\n  $ordinal: Int!\n) {\n  updateJournal(id: $journalId, input: {name: $name, ordinal: $ordinal}) {\n    __typename\n    ... on JournalMutationSuccess {\n      journal {\n        id\n        name\n        ordinal\n      }\n    }\n    ... on MutationFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce1e188c05b166cf52889dfba2f84649";

export default node;
