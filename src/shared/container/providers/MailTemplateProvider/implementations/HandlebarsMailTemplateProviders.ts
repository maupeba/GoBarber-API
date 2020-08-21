import handlebars from 'handlebars';

import IMailTEmplateProvider from '../models/IMailTemplateProvider';
import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTEmplateProvider {
  public async parse({
    template,
    variables,
  }: IParseTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
