/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ListPage_viewer = {|
  +allUsers: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {| |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "searchText",
      "type": "UserFilter",
      "defaultValue": {
        "job_contains": ""
      }
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListPage_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "searchText",
          "type": "UserFilter"
        },
        {
          "kind": "Literal",
          "name": "last",
          "value": 5,
          "type": "Int"
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "createdAt_DESC",
          "type": "UserOrderBy"
        }
      ],
      "concreteType": "UserConnection",
      "name": "allUsers",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "UserEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "User",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "UserCard_user",
                  "args": null
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
  "type": "Viewer"
};

module.exports = fragment;
