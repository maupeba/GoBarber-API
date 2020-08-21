interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTEmplateDTO {
  template: string;
  variables: ITemplateVariables;
}
