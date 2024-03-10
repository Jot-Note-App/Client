/**
 * @generated SignedSource<<5f780bbd9ea8da022506493cb2996a6d>>
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
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
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "MainPanelEntryRowFragment"
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
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "0a5f3e30529937381f57416f5c9f8aef";

export default node;
