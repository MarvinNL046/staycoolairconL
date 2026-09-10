import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion,domAnimation } from 'framer-motion';
import { Writable } from 'node:stream';
import App from './App';

// Wait for every lazy route before writing HTML. Never publish a Suspense fallback.
export function renderPage(path: string): Promise<{ markup: string; head: string }> {
  const context: any = {};
  return new Promise((resolve, reject) => {
    let markup = '';
    let failed = false;
    const timeout = setTimeout(() => {
      failed = true;
      stream.abort();
      reject(new Error(`Rendering timed out: ${path}`));
    }, 15000);
    const stream = renderToPipeableStream(
      <StaticRouter location={path}>
        <HelmetProvider context={context}>
          <LazyMotion features={domAnimation} strict><App /></LazyMotion>
        </HelmetProvider>
      </StaticRouter>,
      {
        onAllReady() {
          clearTimeout(timeout);
          if (failed) return;
          stream.pipe(new Writable({
            write(chunk, _encoding, callback) { markup += chunk; callback(); },
            final(callback) {
              const { helmet } = context;
              resolve({ markup, head: ['title', 'meta', 'link', 'script', 'style'].map(key => helmet[key].toString()).join('\n') });
              callback();
            },
          }));
        },
        onError(error) { failed = true; clearTimeout(timeout); reject(error); },
        onShellError(error) { failed = true; clearTimeout(timeout); reject(error); },
      },
    );
  });
}
