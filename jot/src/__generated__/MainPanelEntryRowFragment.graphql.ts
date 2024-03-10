/**
 * @generated SignedSource<<2279b5eab7cd01fa5917bd2e0b3baacd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelEntryRowFragment$data = {
  readonly content: string | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "MainPanelEntryRowFragment";
};
export type MainPanelEntryRowFragment$key = {
  readonly " $data"?: MainPanelEntryRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntryRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainPanelEntryRowFragment",
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
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Entry",
  "abstractKey": null
};

(node as any).hash = "0abc98b3ade9b0c146cf4eb3b43bea19";

export default node;
