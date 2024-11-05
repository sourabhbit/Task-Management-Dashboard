import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://c421078950ff4c499d55943327ae8e4c@o4504631980195840.ingest.sentry.io/4504631985831936",
  tracesSampleRate: 1.0,
  enabled: process.env.NEXT_PUBLIC_ENV === "production" ? true : false,
  environment: "production",
  ignoreErrors: [
    "play() request was interrupted",
    "hard navigate",
    " Database deleted by request of the user",
    "QuotaExceededError: Quota exceeded.",
  ],
  beforeSend: (event, hint) => {
    const error = hint.originalException;
    if (
      error &&
      error.message &&
      error.message.includes("play() request was interrupted")
    ) {
      return false;
    }
    return true;
  },
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
