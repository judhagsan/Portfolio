import { SpeedInsights } from "@vercel/speed-insights/next";
import Document, {
  children,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />

          {children}
          <SpeedInsights />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
