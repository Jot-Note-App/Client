/**
 * @generated SignedSource<<00cb30aea12e7fe36247be2a86b93e6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelQuery$variables = {
  after?: string | null | undefined;
  journalId?: string | null | undefined;
};
export type MainPanelQuery$data = {
  readonly user: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntriesFeedFragment" | "MainPanelJournalSelectorFragment">;
  };
};
export type MainPanelQuery = {
  response: MainPanelQuery$data;
  variables: MainPanelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "journalId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v3 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "journalId"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MainPanelJournalSelectorFragment"
          },
          {
            "args": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "MainPanelEntriesFeedFragment"
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
    "name": "MainPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": "journalSelectorJournals",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 100
              }
            ],
            "concreteType": "JournalConnection",
            "kind": "LinkedField",
            "name": "journals",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JournalEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Journal",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "journals(first:100)"
          },
          {
            "alias": "entriesFeedJournals",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              (v3/*: any*/)
            ],
            "concreteType": "JournalConnection",
            "kind": "LinkedField",
            "name": "journals",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JournalEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Journal",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "EntryConnection",
                        "kind": "LinkedField",
                        "name": "entries",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "hasNextPage",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "endCursor",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EntryEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Entry",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "createdAt",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "content",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cursor",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "MainPanelEntriesFeedFragment_entries",
                        "kind": "LinkedHandle",
                        "name": "entries"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5e8f17a87e11a984042c475e9eb4bc2d",
    "id": null,
    "metadata": {},
    "name": "MainPanelQuery",
    "operationKind": "query",
    "text": "query MainPanelQuery(\n  $after: ID\n  $journalId: ID\n) {\n  user {\n    id\n    ...MainPanelJournalSelectorFragment\n    ...MainPanelEntriesFeedFragment_1BEdu5\n  }\n}\n\nfragment MainPanelEntriesFeedFragment_1BEdu5 on User {\n  id\n  entriesFeedJournals: journals(first: 1, id: $journalId) {\n    edges {\n      node {\n        id\n        name\n        entries(first: 10, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            node {\n              id\n              ...MainPanelEntryRowFragment\n              __typename\n            }\n            cursor\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MainPanelEntryRowFragment on Entry {\n  id\n  title\n  createdAt\n  content\n}\n\nfragment MainPanelJournalSelectorFragment on User {\n  id\n  journalSelectorJournals: journals(first: 100) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e84f9323ac4bf7d980cd20639348ce67";

export default node;
