/**
 * @generated SignedSource<<c5116725fae6999c61f737ea60cbffc9>>
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
  readonly createdAt: any;
  readonly id: string;
  readonly title: string | null | undefined;
  readonly updatedAt: any;
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
      "name": "updatedAt",
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

(node as any).hash = "f63d703394df5d05bb09d362b1cda37d";

export default node;
