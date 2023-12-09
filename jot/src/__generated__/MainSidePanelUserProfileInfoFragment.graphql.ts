/**
 * @generated SignedSource<<1a554c831494f05e6a0ee909d92ca9d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainSidePanelUserProfileInfoFragment$data = {
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly " $fragmentType": "MainSidePanelUserProfileInfoFragment";
};
export type MainSidePanelUserProfileInfoFragment$key = {
  readonly " $data"?: MainSidePanelUserProfileInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainSidePanelUserProfileInfoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainSidePanelUserProfileInfoFragment",
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
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5d569884561090316f6f07908d416406";

export default node;
