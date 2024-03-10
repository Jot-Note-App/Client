/**
 * @generated SignedSource<<fd373be80e369b65ba1de702da8afd35>>
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
              readonly content: string | null | undefined;
              readonly id: string;
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
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "8978e85eea48fbc45e015da589f4d48f";

export default node;
