/**
 * @generated SignedSource<<dc74b07f2788dc0ee8ba434f237628f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelEntriesFeedFragment$data = {
  readonly entriesFeedJournals: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly entries: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntryRowFragment">;
            };
          }>;
          readonly pageInfo: {
            readonly endCursor: string | null | undefined;
            readonly hasNextPage: boolean;
          };
        } | null | undefined;
        readonly id: string;
        readonly name: string;
      };
    }>;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "MainPanelEntriesFeedFragment";
};
export type MainPanelEntriesFeedFragment$key = {
  readonly " $data"?: MainPanelEntriesFeedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntriesFeedFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "after",
        "direction": "forward",
        "path": null
      }
    ]
  },
  "name": "MainPanelEntriesFeedFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "entriesFeedJournals",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        },
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": "entries",
                  "args": null,
                  "concreteType": "EntryConnection",
                  "kind": "LinkedField",
                  "name": "__MainPanelEntriesFeedFragment_entries_connection",
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
                            (v0/*: any*/),
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "MainPanelEntryRowFragment"
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
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "a967cb5483aa210aefc7ae053bd9d5b0";

export default node;
