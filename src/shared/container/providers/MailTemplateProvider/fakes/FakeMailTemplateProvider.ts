import IMailTEmplateProvider from '../models/IMailTemplateProvider';
import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTEmplateProvider {
  public async parse({ template }: IParseTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
