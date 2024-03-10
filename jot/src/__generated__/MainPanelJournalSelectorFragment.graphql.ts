/**
 * @generated SignedSource<<184290a38d796a82211000ef6cb3c0fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelJournalSelectorFragment$data = {
  readonly id: string;
  readonly journalSelectorJournals: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentType": "MainPanelJournalSelectorFragment";
};
export type MainPanelJournalSelectorFragment$key = {
  readonly " $data"?: MainPanelJournalSelectorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainPanelJournalSelectorFragment">;
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
  "name": "MainPanelJournalSelectorFragment",
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
        }
      ],
      "storageKey": "journals(first:100)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "88f27156d15dd92dc3c94f13317d8e92";

export default node;
