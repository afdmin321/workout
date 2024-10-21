// import { Controller, Get } from '@nestjs/common';
// import { SsrService } from 'ssr/ssr.service';
// import { renderToPipeableStream, renderToString } from 'react-dom/server';
// // @ts-ignore
// import App from '../../client/src/app/App';
// import { ReactNode } from 'react';
// import path from 'path';

// import all from '@babel/register';
// all({ configFile: path.resolve(__dirname, '../../client/.babelrc') });

// @Controller()
// export class SsrController {
//   constructor(private readonly ssrService: SsrService) {}

//   @Get('/asdf')
//   main() {
//     // @ts-ignore

//     const app = renderToPipeableStream(App as ReactNode, {
//       bootstrapScripts: ['../../client/src/index.tsx'],
//     });
//     // @ts-ignore
//     // const app = renderToPipeableStream(<App/>);
//     console.log(app);
//     return app;
//   }
// }
