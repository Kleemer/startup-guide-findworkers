/**
 * @flow
 * @relayHash f4be16aa5e7a33dc7d9bc351112bdf04
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SearchUsersQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query SearchUsersQuery(
  $searchText: UserFilter!
) {
  viewer {
    ...ListPage_viewer_nhk5B
    id
  }
}

fragment ListPage_viewer_nhk5B on Viewer {
  allUsers(filter: $searchText, last: 5, orderBy: createdAt_DESC) {
    edges {
      node {
        ...UserCard_user
        id
      }
    }
  }
}

fragment UserCard_user on User {
  id
  firstname
  lastname
  company
  job
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "searchText",
        "type": "UserFilter!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchUsersQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "searchText",
                "variableName": "searchText",
                "type": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SearchUsersQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "searchText",
        "type": "UserFilter!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SearchUsersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "User",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "firstname",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "lastname",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "company",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "job",
                                "storageKey": null
                              }
                            ]
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SearchUsersQuery(\n  $searchText: UserFilter!\n) {\n  viewer {\n    ...ListPage_viewer_nhk5B\n    id\n  }\n}\n\nfragment ListPage_viewer_nhk5B on Viewer {\n  allUsers(filter: $searchText, last: 5, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...UserCard_user\n        id\n      }\n    }\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  firstname\n  lastname\n  company\n  job\n}\n"
};

module.exports = batch;
