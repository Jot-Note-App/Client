/**
 * @generated SignedSource<<d9ff0def50857c808ee270a84b399bde>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelQuery$variables = Record<PropertyKey, never>;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MainPanelJournalSelectorFragment"
          },
          {
            "args": null,
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
    "argumentDefinitions": [],
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
          (v0/*: any*/),
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
                      (v0/*: any*/),
                      (v1/*: any*/)
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EntryConnection",
                        "kind": "LinkedField",
                        "name": "entries",
                        "plural": false,
                        "selections": [
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
                                  (v0/*: any*/),
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": "journals(first:1)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "30f339c209f3e7a52c80c6d72d2d0e52",
    "id": null,
    "metadata": {},
    "name": "MainPanelQuery",
    "operationKind": "query",
    "text": "query MainPanelQuery {\n  user {\n    id\n    ...MainPanelJournalSelectorFragment\n    ...MainPanelEntriesFeedFragment\n  }\n}\n\nfragment MainPanelEntriesFeedFragment on User {\n  id\n  entriesFeedJournals: journals(first: 1) {\n    edges {\n      node {\n        id\n        name\n        entries {\n          edges {\n            node {\n              id\n              ...MainPanelEntryRowFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MainPanelEntryRowFragment on Entry {\n  id\n  title\n  createdAt\n  content\n}\n\nfragment MainPanelJournalSelectorFragment on User {\n  id\n  journalSelectorJournals: journals(first: 100) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "616a21472403cbb09d45152d57c7e43f";

export default node;
