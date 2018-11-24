// eslint-disable
// this is an auto generated file. This will be overwritten

export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    body
    nick
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      body
      nick
    }
    nextToken
  }
}
`;
