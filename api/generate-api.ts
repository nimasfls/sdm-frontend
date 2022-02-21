const path = require('path');
const fs = require('fs');
const { generateApi } = require('swagger-typescript-api');

generateApi({
  name: 'http-client.ts',
  output: path.resolve(path.join(process.cwd(), 'api')),
  url: 'http://localhost:8000/public/swagger.json',
  generateRouteTypes: true,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  cleanOutput: true,
  enumNamesAsValues: true,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  extraTemplates: [],
  httpClientType: 'axios',
  // eslint-disable-next-line no-console
})
  .then(() => {
    const filePath = path.resolve(
      path.join(process.cwd(), 'api', 'http-client.ts')
    );
    let content = fs.readFileSync(filePath).toString();
    content = '// @ts-nocheck\n' + content;
    fs.unlinkSync(filePath);
    fs.writeFileSync(filePath, content);
  })
  .catch((e: any) => console.error(e));
