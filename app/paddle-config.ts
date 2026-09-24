export type PaddleRuntimeConfig = {
  apiKey: string;
  clientToken: string;
  priceId: string;
  webhookSecret: string;
};

type PaddleEnv = Partial<Record<
  | "PADDLE_API_KEY"
  | "PADDLE_CLIENT_TOKEN"
  | "PADDLE_PRICE_ID"
  | "PADDLE_WEBHOOK_SECRET",
  string | undefined
>>;

export function paddleConfig(input: unknown): PaddleRuntimeConfig {
  const env = input && typeof input === "object" ? input as PaddleEnv : {};
  return {
    apiKey: env.PADDLE_API_KEY?.trim() || "",
    clientToken: env.PADDLE_CLIENT_TOKEN?.trim() || "",
    priceId: env.PADDLE_PRICE_ID?.trim() || "",
    webhookSecret: env.PADDLE_WEBHOOK_SECRET?.trim() || "",
  };
}

export function paddleReady(config: PaddleRuntimeConfig) {
  return Boolean(config.apiKey && config.clientToken && config.priceId && config.webhookSecret);
}
