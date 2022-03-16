enum MessageEnum {
  //api response tag
  RestAPIRequestMessage,
  RestAPIResponseSuccessMessage,
  RestAPIResponseMessage,
  RestAPIResponseDataMessage,
  RestAPIResponseErrorMessage,
  NavigationPropsMessage,
  //api tag
  RestApiEndPoint,
  RestApiHeader,
  RestApiBody,
  RestApiMethod,
  //navigation
  NavigationMessage,
  NavigationRaiseMessage,
  NavigationScreenNameMessage,
  NavigationTargetMessage,
  NavigationPayLoadMessage,
  //manage user session
  RequestUserSession,
  SessionRequestMessage,
  SessionSaveMessage,
  SessionResponseMessage,
  SessionRequestedBy,
  SessionResponseData,
  SessionResponseToken,
  SessionResponseError,
}

export const getName = (myEnum: MessageEnum) => {
  return MessageEnum[myEnum];
};

export default MessageEnum;
