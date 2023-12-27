/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
      message
      chatroomID
      Chatroom {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
      id
      message
      chatroomID
      Chatroom {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
      id
      message
      chatroomID
      Chatroom {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
      id
      title
      Chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
      id
      title
      Chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
      id
      title
      Chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
